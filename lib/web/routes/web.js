(function () {
  'use strict';

  /*
   * Rout Handlers
   */
  exports.home = function(req, res){
    res.render('home', { title: 'Home' });
  };

}());
