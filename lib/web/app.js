(function () {
  'use strict';

  var express = require('express'),
      path = require('path'),
      web = require('./routes/web'),
      middleware = require('./middleware'),
      app = module.exports = express.createServer();

  // Configuration
  app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(middleware.rawParser());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '..', '..', 'extern')));
    app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function () {
    app.use(express.errorHandler());
  });

  // Routes
  app.use(web.home);

  app.listen(3000, function () {
    console.log('Express server listening on port %d in %s mode',
      app.address().port, app.settings.env);
  });

}());
