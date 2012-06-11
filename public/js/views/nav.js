define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/nav.handlebars',
  // Needed for small-screen responsive design collapsing menu.
  'bootstrapCollapse'
],
function($, _, Backbone, Handlebars, navTpl) {
  'use strict';

  var NavView = Backbone.View.extend({

    el: $('#main-navbar'),

    template: Handlebars.compile(navTpl),

    events: {
      'click .main-nav': 'onNavClick'
    },

    // Used to optionally auto-build the navigation.
    navItems: [
      { route: 'home', display: 'Home' },
      { route: 'about', display: 'About' }
    ],

    initialize: function () {
      _.bindAll(this, 'render', 'onNavClick', 'onNavigate');

      this.router = this.options.router;
      this.router.on('all', this.onNavigate);
    },

    render: function (activeLink) {
      this.$el.html(this.template({
        active: activeLink,
        navItems: this.navItems
      }));

      return this;
    },

    onNavClick: function (e) {
      this.router.navigate(
        this.$(e.target).attr('href'),
        { trigger: true, replace: true });
      e.preventDefault();
    },

    onNavigate: function (e) {
      this.render(e.replace('route:', ''));
    }

  });

  return NavView;

});
