import { Router } from 'express';
const router = Router();

import {create_subclase_accesorio} from '../controllers/subclase_accesorio.controller'

// /api/claseAccesorio/
router.post('/',(create_subclase_accesorio))

export default router;