import { Router } from 'express';
import clienteController from '../controllers/ClienteController';

const router = new Router();

router.post('/', clienteController.store);
router.get('/', clienteController.index);
router.get('/:id', clienteController.show);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

export default router;
