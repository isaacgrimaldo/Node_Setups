import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';

import { connectionsDataBase } from './db/DB';
import Notes from './routes/notes';

dotenv.config();

class Server {
    constructor(){
        this.PORT  = process.env.PORT;
        this.app = express();
        this.connectedDB();
        this.middleware();
        this.paths = {
            notes:'/api/notes'
        };
        this.routers();
    }

    middleware(){
        this.app.use(cors () );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }
    
    connectedDB(){
        connectionsDataBase()
            .then(console.log('connected to the data_base'))
            .catch(console.error);
    }

    routers(){
        this.app.use(this.paths.notes, Notes );
    }
    
    listen(){
        this.app.listen( this.PORT , (err) => {
            if(err)  throw new Error('Server OFFLINE');
            console.log('Server running on port '+ this.PORT);
        });
    }
}


export default Server;