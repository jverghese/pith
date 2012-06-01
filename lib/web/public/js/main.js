require.config({
  paths: {
    templates: '../templates',
    text: '../require/text',
    jquery: '../jquery/jquery-1.7.2.min',
    underscore: '../underscore/underscore',
    backbone: '../backbone/backbone',
    handlebars: '../handlebars/handlebars'
    //bootstrap: '../bootstrap/js/bootstrap'
  }
});

require(['app'],
function(App) {
  'use strict';
  App.initialize();
});
