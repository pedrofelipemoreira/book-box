//import {engine} from 'express-handlebars'
import express from 'express';
import cors from 'cors';
//import coon from './db/coon.js' 

const app = express();

// Config JSON response 

app.use(express.json());

// Solve CORS

app.use(cors({credentials: true, origin: 'http://localhost:3000' }))

// Public folder dor images

app.use(express.static('public'))

// Routes

app.listen(5000)