import express, { Express, Request, Response ,NextFunction} from 'express';
import articleRouter from './routers/v1/users.router';
import bodyParser from 'body-parser';
import createError from 'http-errors'
import {sendJsonSuccess,sendJsonErrors} from './helpers/responseHandler';


const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});


 app.use('/api/v1',articleRouter)

 

 app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  //res.status(statusCode).json({ statusCode: statusCode, message: err.message })
  sendJsonErrors(res,err)
});
export default app