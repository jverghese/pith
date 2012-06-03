(function () {
  'use strict';

  var path = require('path');

  module.exports = function(app, express) {

    // General Config
    app.configure(function () {
      app.set('views', __dirname + '/views');
      app.set('view engine', 'hbs');
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      //app.use(middleware.rawParser());
      app.use(app.router);
      app.use(express.static(path.join(__dirname, '..', 'public')));
    });

    app.configure('development', function () {
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function () {
      app.use(express.errorHandler());
    });

    return this;
  };

}());
