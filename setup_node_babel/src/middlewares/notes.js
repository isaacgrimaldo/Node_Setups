import { check, param }  from  'express-validator';
import { errorHandler } from './helpers/errorHandler';
import { setDateNotes } from './helpers/setDateNotes';

export  const notesMiddlewares = {
    getNotebyId:[
        param('id','should be a MONGODB ID').isMongoId(),
        errorHandler
    ],
    createNotes:[
        check('title','is required').not().isEmpty(),
        check('body','is required').not().isEmpty(),
        setDateNotes,
        check('date','is requiered').not().isEmpty(),
        errorHandler,
    ],
    deleteNote:[
        param('id','should be a MONGODB ID').isMongoId(),
        errorHandler
    ]
};