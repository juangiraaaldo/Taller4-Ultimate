import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/auth.routes.js'; 

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Rutas
app.use('/api/users', userRoutes); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));