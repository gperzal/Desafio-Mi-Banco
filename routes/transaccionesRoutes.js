// routes/transaccionesRoutes.js
import express from 'express';
import { registrarTransferencia, obtenerUltimasTransferencias, consultarSaldo } from '../controllers/transaccionesController.js';


const router = express.Router();

router.post('/transferencias', registrarTransferencia);
router.get('/transferencias/:cuentaId', obtenerUltimasTransferencias);
router.get('/saldo/:cuentaId', consultarSaldo);





export default router;
