import {NextFunction, Request, Response, Router} from "express";

const testRouter = Router();

/* GET welcome page. */
testRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ title: 'Greetings' });
});

export {testRouter};
