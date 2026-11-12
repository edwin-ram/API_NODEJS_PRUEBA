import express from 'express';
import {connectDB} from './config/db.js';
import productoRoutes from './routes/productoRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.use(express.json());

app.use('/api/productos', productoRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});