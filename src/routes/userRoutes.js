import { Router } from 'express';
const router = new Router();

import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
