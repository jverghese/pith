module.exports = function () {
  'use strict';

  return function (req, res, next) {
    var buf = '';
    // flag as parsed
    req._body = true;
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
      buf += chunk;
    });
    req.on('end', function () {
      try {
        req.body = buf;
        next();
      } catch (err){
        err.status = 400;
        next(err);
      }
    });
  };
};
