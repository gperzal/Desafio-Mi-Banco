// controllers/transaccionesController.js
import Cuenta from '../models/cuenta.js';
import Transferencia from '../models/transferencia.js';
import sequelize from '../config/database.js';
import { Op } from 'sequelize';

const registrarTransferencia = async (req, res) => {
    const { descripcion, fecha, monto, cuentaOrigen, cuentaDestino } = req.body;
    let transaction;

    try {
        transaction = await sequelize.transaction();

        // Verificar el saldo de la cuenta origen
        const cuentaO = await Cuenta.findByPk(cuentaOrigen, { transaction });
        if (!cuentaO || cuentaO.saldo < monto) {
            return res.status(400).send('Fondos insuficientes o cuenta origen no encontrada.');
        }

        // Actualizar saldos
        cuentaO.saldo -= monto;
        await cuentaO.save({ transaction });

        const cuentaD = await Cuenta.findByPk(cuentaDestino, { transaction });
        if (!cuentaD) {
            return res.status(400).send('Cuenta destino no encontrada.');
        }
        cuentaD.saldo += monto;
        await cuentaD.save({ transaction });

        // Registrar transferencia
        await Transferencia.create({
            descripcion,
            fecha,
            monto,
            cuentaOrigen,
            cuentaDestino
        }, { transaction });

        await transaction.commit();
        res.status(201).send('Transferencia realizada con éxito.');
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error(error);
        res.status(500).send('Error al realizar la transferencia.');
    }
};


// Funcion últimos 10 registros
const obtenerUltimasTransferencias = async (req, res) => {
    const { cuentaId } = req.params;
    try {
        const transferencias = await Transferencia.findAll({
            where: {
                [Op.or]: [
                    { cuentaOrigen: cuentaId },
                    { cuentaDestino: cuentaId }
                ]
            },
            order: [['fecha', 'DESC']],
            limit: 10
        });

        res.status(200).json(transferencias);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las transferencias.');
    }
};


// Funcion saldo actual 
const consultarSaldo = async (req, res) => {
    const { cuentaId } = req.params;
    try {
        const cuenta = await Cuenta.findByPk(cuentaId);
        if (!cuenta) {
            return res.status(404).send('Cuenta no encontrada.');
        }

        res.status(200).json({ saldo: cuenta.saldo });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar el saldo.');
    }
};


export { registrarTransferencia, obtenerUltimasTransferencias, consultarSaldo };
