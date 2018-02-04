import {Request, Response, Router} from 'express';
import {mysqlPool} from '../db/mysql';

const userRouter = Router();

userRouter.get('/id/:id', (request: Request, response: Response) => {
    mysqlPool.getConnection((err, connection) => {
        connection.query('SELECT * from user WHERE id = ?', [request.params.id], (error, results, fields) => {
            response.json(results);
            connection.release();
            if (error) {
                throw error;
            }
        });
    });
});

userRouter.get('/name/:name', (request: Request, response: Response) => {
    mysqlPool.getConnection((err, connection) => {
        connection.query('INSERT INTO user (username) values (?)', [request.params.name], (error, results, fields) => {
            response.json(results.insertId);
            connection.release();
            if (error) {
                throw error;
            }
        });
    });
});

export {userRouter};
