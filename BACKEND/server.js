import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.routes.js'; 
import connectDB from './src/config/db.js';

dotenv.config();
const app = express();

connectDB();

app.use(cors()); 
app.use(express.json()); 

app.use('/api/auth', authRoutes); 

app.get('/test', (req, res) => {
  res.send('FUNCIONA');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` El servidor esta corriendo en el puerto ${PORT}`));