require.config({
  paths: {
    'templates':            '../templates',
    'text':                 '../require/text',
    'jquery':               '../jquery/jquery-1.7.2.min',
    'backbone':             '../backbone/backbone',
    'underscoreBase':       '../underscore/underscore',
    'underscore':           'lib/underscore',
    'handlebars':           'lib/handlebars',
    // Bootstrap plugins
    'bootstrapAlert':       '../bootstrap/js/bootstrap-alert',
    'bootstrapButton':      '../bootstrap/js/bootstrap-button',
    'bootstrapCarousel':    '../bootstrap/js/bootstrap-carousel',
    'bootstrapCollapse':    '../bootstrap/js/bootstrap-collapse',
    'bootstrapDropdown':    '../bootstrap/js/bootstrap-dropdown',
    'bootstrapModal':       '../bootstrap/js/bootstrap-modal',
    'bootstrapPopover':     '../bootstrap/js/bootstrap-popover',
    'bootstrapScrollspy':   '../bootstrap/js/bootstrap-scrollspy',
    'bootstrapTab':         '../bootstrap/js/bootstrap-tab',
    'bootstrapTooltip':     '../bootstrap/js/bootstrap-tooltip',
    'bootstrapTransition':  '../bootstrap/js/bootstrap-transition',
    'bootstrapTypeahead':   '../bootstrap/js/bootstrap-typeahead'
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
    },
    // Boostrap Plugins
    'bootstrapAlert':       ['jquery'],
    'bootstrapButton':      ['jquery'],
    'bootstrapCarousel':    ['jquery'],
    'bootstrapCollapse':    ['jquery'],
    'bootstrapDropdown':    ['jquery'],
    'bootstrapModal':       ['jquery'],
    'bootstrapPopover':     ['jquery'],
    'bootstrapScrollspy':   ['jquery'],
    'bootstrapTab':         ['jquery'],
    'bootstrapTooltip':     ['jquery'],
    'bootstrapTransition':  ['jquery'],
    'bootstrapTypeahead':   ['jquery']
  }
});

require(['app'], function(App) {
  'use strict';
  App.initialize();
});
