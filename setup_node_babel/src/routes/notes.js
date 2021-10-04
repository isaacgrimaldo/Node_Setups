/**
 *  path = api/notes
 */

import { Router } from 'express';
import { notesControllers } from '../controllers/notes';
import { notesMiddlewares } from '../middlewares/notes';

const router = Router();

router.get('/' , notesControllers.getNotes);

router.get('/:id',[
    ...notesMiddlewares.getNotebyId    
],notesControllers.getNotebyId);

router.post('/' ,[
    ...notesMiddlewares.createNotes
],notesControllers.createNote);

router.delete('/:id',[
    ...notesMiddlewares.deleteNote
],notesControllers.deteleNote);

export default router;