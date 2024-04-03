// config/database.js
import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.PGDATABASE || 'banco',
    process.env.PGUSER || 'tu_usuario',
    process.env.PGPASSWORD || 'tu_contraseña',
    {
        host: process.env.PGHOST || 'localhost',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        dialectOptions: {
            ssl: {
                require: true, // Requerir SSL
                rejectUnauthorized: false // No rechazar certificados no autorizados (útil para certificados autofirmados)
            }
        }
    }
);

export default sequelize;
