require.config({
  paths: {
    templates: '../templates',
    text: '../require/text',
    jquery: '../jquery/jquery-1.7.2.min',
    handlebars: 'lib/handlebars',
    backbone: '../backbone/backbone',
    underscoreBase: '../underscore/underscore',
    underscore: 'lib/underscore'
    //bootstrap: '../bootstrap/js/bootstrap'
  },
  // Load modules that don't natively support AMD.
  shim: {
    'underscoreBase': {
      deps: [],
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function(App) {
  'use strict';
  App.initialize();
});
