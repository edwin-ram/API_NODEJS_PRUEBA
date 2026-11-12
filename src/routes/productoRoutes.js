import {Router} from 'express';
import {
    crearProducto,
    listarProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto} from '../controllers/productosController.js';
import {validarID} from '../middlewares/validarID.js';

const router = Router();

router.post('/', crearProducto);
router.get('/', listarProductos);
router.get('/:id', validarID, obtenerProducto);
router.put('/:id', validarID, actualizarProducto);
router.delete('/:id', validarID, eliminarProducto);

export default router;