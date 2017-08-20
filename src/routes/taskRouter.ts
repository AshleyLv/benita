import {Request, Response, Router} from 'express';
import {TaskStatus} from '../models/taskStatus';

const taskRouter = Router();

taskRouter.get('/id/:id', (request: Request, response: Response) => {
    TaskStatus.findAll({
        where: {
            id: [request.params.id]
        }
    }).then((result) => {
        response.json(result);
    });
});

export {taskRouter};
