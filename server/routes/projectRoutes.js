import { Router } from 'express';
import { getAll, getById, create, updateById, removeById, removeAll } from '../controllers/projectController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', requireAuth, create);
router.put('/:id', requireAuth, updateById);
router.delete('/:id', requireAuth, removeById);
router.delete('/', requireAuth, removeAll);
export default router;

