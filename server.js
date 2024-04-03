// server.js
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import transaccionesRoutes from './routes/transaccionesRoutes.js';
import setupStaticFiles from './middlewares/staticFile.js';




const app = express();
const PORT = process.env.PORT || 3000;

setupStaticFiles(app);

app.use(bodyParser.json());
app.use('/api', transaccionesRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    });
});
