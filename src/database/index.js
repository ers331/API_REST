import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Cliente from '../models/Cliente';

const models = [Cliente];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
