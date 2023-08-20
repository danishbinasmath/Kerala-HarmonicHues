import express from 'express';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import multer from 'multer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan  from 'morgan';
import Connection from './database/db.js';










const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true})); 

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`The server is running successfully on port ${PORT}`));