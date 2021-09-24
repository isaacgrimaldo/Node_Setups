/**
 *  path = /api/user/;
 */

import { Request , Response } from 'express';

export const getUsers =  (req:Request ,  res:Response ) => {
    
    const { id , nickname } = req.params;
      
    return res.status(200).json({
        msg:'Hello Word',
        id,
        nickname
    });
};


export const postUsers =  (req:Request ,  res:Response ) => {
    
    const { body } =  req;

    return res.status(201).json({
        msg:'created user',
        body
    });
};

export const uptUsers =  (req:Request ,  res:Response ) => {
    
    const { params, body } =  req;
    const { id } =  params; 

    return res.status(200).json({
        msg:'update user',
        id,
        body
    });
};

export const deletUsers =  (req:Request ,  res:Response ) => {
    
    const { id } = req.params;

    return res.status(200).json({
        msg:'deleted user',
        id,
    });
};


