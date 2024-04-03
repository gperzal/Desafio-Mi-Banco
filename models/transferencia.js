// models/Transferencia.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cuenta from './cuenta.js'; // Importa el modelo Cuenta

const Transferencia = sequelize.define('Transferencia', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    monto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuentaOrigen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cuentaDestino: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'transferencias',
    timestamps: false
});

Transferencia.belongsTo(Cuenta, { as: 'CuentaOrigen', foreignKey: 'cuentaOrigen' });
Transferencia.belongsTo(Cuenta, { as: 'CuentaDestino', foreignKey: 'cuentaDestino' });


export default Transferencia;
