import { data, Item } from '../DB/data';

export const getItemById = ( id:Number ):Item  => {
     return data.items.filter( item  =>  item.id === id )[0];     
}

export  const deletItemById = (id:Number):Item[] => {
    const test:Item =  data.items.filter( item  =>  item.id === id )[0];
    const resp:Item[] =  data.items.filter( item  =>  item.id !== id );
    
    if(!test){
        throw new Error('Data-Index');
    }   

    return resp; 
}