(function () {
  'use strict';

  exports.get = function(req, res){
    res.render('home', { title: 'Home' });
  };

}());
