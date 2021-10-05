import {newServer} from '../../app';
import { api } from './createServer';

const path =  newServer.paths.notes;

export const getAllNotes = async() => {
   const res = await api.get(path);
   return res.body;
}