import  express, { Application }  from 'express'; 
import cors from 'cors';

import items  from './routers/items'

interface Paths {
    items:string
}

class Server{
     private App:Application;
     private PORT:String  | Number;
     private paths:Paths;
     constructor(){
         this.App = express();
         this.PORT = (!process.env.PORT) ?8000 : process.env.PORT;
         this.paths = {
            items : '/api/items',
        }
         this.middlewares();
         this.routers();
     }

     middlewares(){
         this.App.use( cors() );
         this.App.use(express.json());
         this.App.use(express.static('public'));
     }

     routers(){
        this.App.use(this.paths.items,  items );
     }
      
     listen(){
         this.App.listen(this.PORT , () => {
            console.log('Run Server on PORT= ' + this.PORT);
         });
     }
}




export default Server;