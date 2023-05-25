import { Router } from 'express';
const router = new Router();

import loginRequired from '../middlewares/loginRequired';

import alunoController from '../controllers/AlunoController';

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.get('/:id', alunoController.show);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
