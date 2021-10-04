import { request, response } from 'express';
import { validationResult } from 'express-validator';

export const errorHandler = (req = request ,  res =response ,  next =next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(401).json({
            errs: errors.mapped()
        });
    }else{
        next();
    }
}; 