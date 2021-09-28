/**
 *  paht = api/items/
 */

import { Router } from 'express'
import { iteamsControllers } from '../controllers/items';


const router  = Router();

router.get('/',  iteamsControllers.getItems );
router.get('/:id',  iteamsControllers.getItemById );  
router.delete('/:id', iteamsControllers.deleteItemById);


export default router;