define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/nav.handlebars'
],
function($, _, Backbone, Handlebars, navTpl) {
  'use strict';

  var NavView = Backbone.View.extend({

    el: $('#main-navbar'),

    template: Handlebars.compile(navTpl),

    events: {
    },

    initialize: function () {
      _.bindAll(this, 'render', 'onNavigate');

      this.router = this.options.router;
      this.router.on('all', this.onNavigate);
    },

    render: function (activeLink) {
      this.$el.html(this.template({
        active: activeLink
      }));

      return this;
    },

    onNavigate: function (e) {
      this.render(e.replace('route:', ''));
    }

  });

  return NavView;

});
