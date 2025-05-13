import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
try {
    console.log(process.env.MONGO_URL)
    console.log(typeof process.env.MONGO_URL)
    const connection = mongoose.connect(process.env.MONGO_URL)
    connection && console.log("BASE DE DATOS CONECTADA");
} catch (error) {
    console.log(error)
}


app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
