import express from 'express';

import cors from 'cors';

import Routes from './routes/route.js';

import Connection from './database/db.js';

const app = express();

app.use(cors());

app.use('/', Routes);

app.use(express.json());

app.use(express.urlencoded({extended: true})); 

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`The server is running successfully on port ${PORT}`));