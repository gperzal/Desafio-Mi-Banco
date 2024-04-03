// models/Cuenta.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cuenta = sequelize.define('cuenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    saldo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }
}, {
    tableName: 'cuentas',
    timestamps: false
});

export default Cuenta;
