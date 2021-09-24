import { Router } from 'express';
import { getUsers, postUsers, uptUsers, deletUsers } from '../controllers/users';

const route = Router();

route.get('/', getUsers);
route.get('/:id', getUsers);
route.get('/:id/:nickname', getUsers);
route.post('/',postUsers);
route.put('/id', uptUsers);
route.delete('/id', deletUsers);

export default route;