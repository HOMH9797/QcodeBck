import { Router } from 'express';
const router = Router();

import { 
        create_clase_accesorio,
        consultar_clase_accesorio,una_clase_accesorio, 
        eleminar_clase_accesorio,
        actualizar_clase_accesorio 
} from '../controllers/clase_accesorio.controller';

// /api/clase-accesorio
router.post('/',(create_clase_accesorio))

router.get('/',(consultar_clase_accesorio))

router.get('/:id',(una_clase_accesorio));

router.delete('/:id',(eleminar_clase_accesorio));

router.put('/:id',(actualizar_clase_accesorio));

export default router;