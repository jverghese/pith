(function () {
  'use strict';

  module.exports = function (app) {
    return {
      home: require('./home')(app)
    };
  };

}());
