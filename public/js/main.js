require.config({
  paths: {
    templates: '../templates',
    text: '../require/text',
    jquery: '../jquery/jquery-1.7.2.min',
    underscore: '../underscore/underscore',
    backbone: '../backbone/backbone',
    handlebars: '../handlebars/handlebars'
    //bootstrap: '../bootstrap/js/bootstrap'
  },
  // Load modules that don't natively support AMD.
  shim: {
    // No dependencies but exports '_' for others to use.
    'underscore': {
      deps: [],
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'],
function(App) {
  'use strict';
  App.initialize();
});
