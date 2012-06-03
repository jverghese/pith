(function () {
  'use strict';

  var express = require('express'),
      middleware = require('../lib/middleware'),
      app = module.exports = express.createServer(),
      config = require('./config.js')(app, express),
      routes = require('./routes')(app);

  app.listen(process.env.PORT || 3000, function () {
    console.log('Express server listening on port %d in %s mode',
      app.address().port, app.settings.env);
  });

}());
