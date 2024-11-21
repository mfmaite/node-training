const express = require('express');
const home = require('./home');
const message = require('./message');

const router = express.Router();

function routerApi(app) {
  app.use('/', router);

  router.use('/', home);
  router.use('/message', message);
}

module.exports = routerApi;
