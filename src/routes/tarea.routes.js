import { Router } from 'express';
const router = Router();

import { create_tarea, get_tarea, get_tareaid, update_tarea, delete_tarea} from '../controllers/tarea.controller';

// /api/subclase-accesorio
router.post('/',(create_tarea))
router.get('/',(get_tarea))
router.get('/:id',(get_tareaid))
router.put('/:id',(update_tarea))
router.delete('/:id',(delete_tarea))


export default router;