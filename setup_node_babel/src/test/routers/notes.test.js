import mongoose from 'mongoose';

import {newServer} from '../../app.js';
import notes from '../../collectionsMDB/notes';
import {localNotes} from '../features/notes';

//Helpers
import { getAllNotes } from '../helpers/getAllNotes.js';
import { api } from '../helpers/createServer.js';


describe('integrations tests from route: "/api/notes" ', () => {
    
    const { 
        notes:notesPath
    } = newServer.paths;  
    
    let testId = '';

    beforeEach( async () => {
        await notes.deleteMany({});
        
        for (const note of localNotes) {
            const noteObject = new notes(note);
            const noteSave = await noteObject.save(); 
            testId = noteSave._id;  
        };
    });
   
    afterAll(() => {
        newServer.close();
        mongoose.connection.close();
    }); 

    const newNote = {
        title:'New note',
        body:'this is a new note'
    };

   describe('tests with method GET', () => {
      
      test('Should returned as json', async( ) => {
          await api
              .get(notesPath)
              .expect('Content-Type', /application\/json/)
              .expect(200);
      });
   
      test('Should  return the all notes from the Data_BASE ', async( ) => {
          
         const {count} =  await getAllNotes();
         expect(count).toBe(localNotes.length);
      });
      
      test(`The firts note shoulds contain "${localNotes[0].body}" in the body`, async() => {
          
          const {allNotes} = await getAllNotes();
          const bodyNotes = allNotes.map( note => note.body );
          expect(bodyNotes).toContain(localNotes[0].body);
      });
   });
   
   describe('Test with method POST', () => {
      
      test('Should added the new note', async() => {
   
          const note = await api
              .post(notesPath)
              .send(newNote)
              .expect('Content-Type', /application\/json/)
              .expect(201);
         
          const {allNotes: getNotes  } =  await getAllNotes();
          const allNotes = getNotes;
          expect(allNotes.length).toBe(localNotes.length + 1 );
   
          const id = note.body.note._id;
          await notes.findByIdAndDelete({_id:id});
      });

      test('Should not added notes with incomplete data',async () => {
         
         const newNote = {};  
         
        await api.post(notesPath)
               .send(newNote)
               .expect(401)
                                                
         const { allNotes } = await getAllNotes();
         expect(allNotes).toHaveLength(localNotes.length);       
      });  
   });
   
   describe('Test with method DELET', () => {
      
      test('should deleted a note by id', async() => {
        
          await api.
              delete(`/api/notes/${testId}`)
              .expect('Content-Type', /application\/json/)
              .expect(200);
   
          const {allNotes:notes} = await getAllNotes();
          const allNotes = notes ; 
   
          expect(allNotes.length).toBe(localNotes.length - 1);
      });

      test('should not delete with wrong id', async() => {
         
         const testId = '615ac603ddbc076560dd2847'

         await api.delete(`${notesPath}/${testId}`)
                  .expect('Content-Type', /application\/json/)
                  .expect(404)
         
         const {  allNotes }  = await getAllNotes();     
         expect(allNotes).toHaveLength(localNotes.length);   
      });
      
   });
   
});

