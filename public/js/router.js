define([
  'backbone',
  'views/home',
  'models/hello',
  'collections/hellos'
],
function(Backbone, HomeView, Hello, Hellos) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      'home': 'home',
      // Default
      '*actions': 'defaultAction'
    },

    initialize: function (options) {

      var testCollection = new Hellos();
      testCollection.add();
      testCollection.add({'text': 'there!'});

      this.homeView = new HomeView({ collection: testCollection });
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
