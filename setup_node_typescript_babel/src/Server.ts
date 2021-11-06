import express, { Application } from 'express';
import cors from 'cors';

class Server {
  private App: Application;
  private PORT: string | number;

  constructor() {
    this.App = express();
    this.PORT = !process.env.PORT ? 8000 : process.env.PORT;
    this.middlewares();
    this.routers();
  }

  middlewares() {
    this.App.use(cors());
    this.App.use(express.json());
    this.App.use(express.static('public'));
  }

  routers() {
    this.App.get('/api', (req, res) => {
      return res.status(200).send('Hello, world!');
    });
  }

  listen() {
    this.App.listen(this.PORT, () => {
      console.log('Run Server on PORT= ' + this.PORT);
    });
  }
}

export default Server;
