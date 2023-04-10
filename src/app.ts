import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { userRoutes } from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.use('/users', userRoutes);

export default app; 

