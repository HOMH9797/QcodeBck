import { Router } from 'express';
const router = Router();

import {
    create_subclase_accesorio,
    subclase_porclase,
    subclase_id,
    subclase_update,
    subclase_delete
} from '../controllers/subclase_accesorio.controller'


router.get('/:id', (subclase_porclase))
// /api/claseAccesorio/
router.post('/', (create_subclase_accesorio))

router.get('/subclase/:id', (subclase_id))

router.put('/:id', (subclase_update));

router.delete('/:id', (subclase_delete));



export default router;