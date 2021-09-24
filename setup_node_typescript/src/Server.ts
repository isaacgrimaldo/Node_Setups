import express, { Application } from 'express'; 

import usersRouters from './routes/users'; 

class Server {
   
    private app:Application ; 
    private port:String | Number;
    private apiPaths = {
        user:'/api/users'
    }

  constructor(){

    this.app = express();
    this.port = process.env.PORT || 8000;
    this.routers();
  };
   
  routers(){
      this.app.use(this.apiPaths.user,  usersRouters );
  }

  listen(){
     this.app.listen(this.port, () => {
         console.log('Server run on PORT:'+ this.port);
     });
     
  };
};

export default Server ;