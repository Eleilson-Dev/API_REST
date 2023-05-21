import { Router } from 'express';
const router = new Router();

import UserController from '../controllers/UserController';

router.post('/', UserController.store);

export default router;
