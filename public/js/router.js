define([
  'backbone',
  'views/nav',
  'views/home',
  //'views/about',
  'models/hello',
  'collections/hellos'
],
function(Backbone, NavView, HomeView, Hello, Hellos) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'home',
      'home': 'home',
      //'about': 'about',
      // Default
      '*actions': 'defaultAction'
    },

    initialize: function (options) {

      // TODO: Remove this test data
      var testCollection = new Hellos();
      testCollection.add();
      testCollection.add({'text': 'there!'});
      // Test Data

      this.navView = new NavView({ router: this });
      this.homeView = new HomeView({ collection: testCollection });
      //this.aboutView = new AboutView();
    },

    home: function () {
      this.homeView.render();
    },

    //about: function () {
      //this.aboutView.render();
    //},

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
