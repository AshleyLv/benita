import {json, urlencoded} from "body-parser";
import * as express from 'express';
import * as compression from "compression";

import {testRouter} from "./routes/testRouter";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// api routes
app.use('/', testRouter);

// catch 404 and forward to error handler
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
    const err = new Error('Not Found');
    next(err);
});

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message,
    });
});

export {app};
