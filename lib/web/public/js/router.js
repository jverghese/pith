define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'models/hello',
  'collections/hellos'
],
function($, _, Backbone, HomeView, Hello, Hellos) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      'home': 'home',
      // Default
      '*actions': 'defaultAction'
    },

    initialize: function (options) {
      this.homeView = new HomeView();
    },

    home: function () {
      this.homeView.render();
    },

    defaultAction: function (actions) {
      // No route.
      this.navigate('home', { trigger: true, replace: true });
    }

  });

  return {
    initialize: function () {
      var appRouter = new AppRouter();
      Backbone.history.start({ pushState: true });
    }
  };

});
