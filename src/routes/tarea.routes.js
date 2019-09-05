import { Router } from 'express';
const router = Router();

import { create_tarea } from '../controllers/tarea.controller';

// /api/subclase-accesorio
router.post('/',(create_tarea))

export default router;