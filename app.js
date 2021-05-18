import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './src/routes/clienteRoutes';

class App {
  constructor() {
    this.app = express(bodyParser);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use('/clientes/', clienteRoutes);
  }
}

export default new App().app;
