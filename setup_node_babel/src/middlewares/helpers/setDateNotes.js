import { request} from 'express';

export const setDateNotes = (req = request ,  _  , next ) => {
    const date =  new Date().getTime();
    req.body.date = date;    
    next();
};
