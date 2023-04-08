// main set up page for Express.
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

// create an instance of the Express application
const app = express();

// enable CORS
app.use(cors());

// parse incoming JSON requests
app.use(bodyParser.json());

// log requests to the console
app.use(morgan('tiny'));