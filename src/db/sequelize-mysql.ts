import * as sequelize from 'sequelize';
import {mysqlConfigDev, mysqlConfigProd} from '../../config';

const env = process.env.NODE_ENV;
const config = env === 'prod' ? mysqlConfigProd : mysqlConfigDev;

export const slDB = new sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 1,
            idle: 100000
        }
    }
);

export const Sequelize = sequelize;
