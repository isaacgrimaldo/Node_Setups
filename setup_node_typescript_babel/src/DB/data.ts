export interface Data{
    items:Item[]
}


export interface Item {
    id:number,
    name:string,
    date:number
}


export  const data:Data = {
    items:[
        {
            id:0,
            name:'Papas',
            date: new Date().getDate()
        },
        {
            id:1,
            name:'Cerveza',
            date: new Date().getDate()
        }, 
        {
            id:2,
            name:'Sopa',
            date: new Date().getDate()
        },
         {
            id:3,
            name:'Verdura',
            date: new Date().getDate()
        }
    ]
} 