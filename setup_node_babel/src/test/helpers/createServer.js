import supertest from 'supertest';
import {newServer} from '../../app';

export const api = supertest(newServer.server);

