import { request, response } from 'express';
import notes from '../collectionsMDB/notes';


export const notesControllers = {
    getNotes: async ( _ , res = response) => {
        try {
            const [ count ,  allNotes  ] = await Promise.all([
                notes.count(),
                notes.find()
            ]) ;
            return res.status(200).json({
                count,
                allNotes
            }); 

        } catch (error) {
            console.log(error);
            return res.status(400).send('Data-Error');
        }
    },
    createNote: async(req = request ,  res = response) => {
        const { body } =  req;
        
        try {     
            const newnotes = new notes(body);
            const note = await newnotes.save();
            
            return res.status(201).json({
                note
            });

        } catch (error) {
            console.log(error);
        }
    },
    getNotebyId:(req =request , res =response) =>{
        const { id } = req.params;
       
        notes.findById({_id: id})
            .then(note =>{
                return note 
                    ? res.status(200).json({
                        note
                    })
                    :  res.status(401).send('bad-request');          
            })
            .catch((err) =>{
                console.log(err);
                return res.status(500).send('ERROR-SERVER');
            });
    },
    deteleNote: (req = request , res =response) =>{
        const { id } = req.params;
       
        notes.findByIdAndDelete({_id: id},{new: true})
            .then(note =>{
                return note 
                    ? res.status(200).json({
                        note
                    })
                    :  res.status(401).send('bad-request');          
            })
            .catch((err) =>{
                console.log(err);
                return res.status(500).send('ERROR-SERVER');
            }); 
    }
};