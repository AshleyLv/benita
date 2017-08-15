import * as mysql from 'mysql';
import {mysqlConfigDev, mysqlConfigProd} from "../../config";

const env = process.env.NODE_ENV;
const config = env === 'prod' ? mysqlConfigProd : mysqlConfigDev;

export const mysqlPool = mysql.createPool(config);
