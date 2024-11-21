import express from 'express';
import home from './home';
import message from './message';
import { Express } from 'express-serve-static-core';

const router = express.Router();

function routerApi(app: Express) {
  app.use('/', router);

  router.use('/', home);
  router.use('/message', message);
}

export default routerApi;
