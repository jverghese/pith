define([
  'underscore',
  'backbone'
],
function(_, Backbone){
  'use strict';

  var Hello = Backbone.Model.extend({

    defaults: {
      text: 'hello'
    },

    initialize: function () {
    }

  });

  return Hello;
});
