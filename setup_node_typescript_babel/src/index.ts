import dotenv from 'dotenv';
import Server from './Server';
dotenv.config();

const newServer = new Server();
newServer.listen();
