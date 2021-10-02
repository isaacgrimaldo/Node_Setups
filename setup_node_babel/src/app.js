import env from 'dotenv';
import Server from './Server';

env.config();

const newServer = new Server();
newServer.listen();   