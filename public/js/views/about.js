define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/about.handlebars'
],
function($, _, Backbone, Handlebars, aboutTpl) {
  'use strict';

  var NavView = Backbone.View.extend({

    el: $('#main-container'),

    template: Handlebars.compile(aboutTpl),

    events: {
    },

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function (activeLink) {
      this.$el.html(this.template({
      }));

      return this;
    }

  });

  return NavView;

});
