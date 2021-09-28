import { Response , Request } from 'express';
import { data, Item } from '../DB/data';
import { getItemById, deletItemById } from '../helpers/getItemById';

interface Controllers {
    getItems: ( req:Request , res:Response ) => void
    getItemById: ( req:Request , res:Response ) => void
    deleteItemById: ( req:Request , res:Response ) => void
}


export const iteamsControllers:Controllers = {
    
    getItems:(req   , res  )=> {
           
        return res.status(200).json({
               data:data
           });
 },
    getItemById: (req ,  res ) => {
       const { id } = req.params;
    
           const  item  = getItemById(Number(id));
                     
           if(item) {
                return res.status(200).json(
                    item
            );
           }else{
                return res.status(404).json({ERROR:'ERROR_INDEX_DATA'});
           }

 },

     deleteItemById: (req , res) => {
        const { id } = req.params;
            try {
                const  items:Item[]  = deletItemById(Number(id));
                return res.status(201).json(items);
            } catch (error) {
                console.error(error);
                return res.status(201).send('ERROR-INDEX');
            }
            
}

} 