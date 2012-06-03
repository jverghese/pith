(function () {
  'use strict';

  module.exports = function (app) {

    app.get('/', function(req, res) {
      res.render('home', { title: 'Home' });
    });

    app.get('/home', function(req, res) {
      res.render('home', { title: 'Home' });
    });

  };

}());
