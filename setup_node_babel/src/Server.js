import express from 'express';
import cors from 'cors';

class Server {
  constructor() {
    this.PORT = process.env.PORT;
    this.app = express();
    this.middleware();
    this.routers();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routers() {
    this.app.get('/hola', (req, res) => {
      res.status(200).send('Hola');
      console.log('hola');
    });
  }

  listen() {
    this.app.listen(this.PORT, (err) => {
      if (err) throw new Error('Server OFFLINE');

      console.log('Server running on port ' + this.PORT);
    });
  }
}

export default Server;
