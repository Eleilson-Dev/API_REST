import { Router } from 'express';
import loginRequerid from '../middlewares/loginRequired';

import FotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequerid, FotoController.store);

export default router;
