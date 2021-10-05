import env from 'dotenv';
import Server from './Server';

env.config();

export const newServer = new Server();
newServer.listen();   
