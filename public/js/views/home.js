define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/hello',
  'collections/hellos',
  'text!templates/home.hbs'
],
function($, _, Backbone, Handlebars,
  Hello, Hellos, homeTpl) {
  'use strict';

  var HomeView = Backbone.View.extend({

    el: $('#main-container'),

    template: Handlebars.compile(homeTpl),

    events: {
      'click .add-new': 'onAddNewClick'
    },

    initialize: function () {
      _.bindAll(this,
        'onAddNewClick',
        'render');

      //this.collection.on('add', this...);
      this.collection.on('reset', this.render);
    },

    render: function () {
      this.$el.html(this.template({
        hellos: this.collection.toJSON()
      }));

      return this;
    },


    // EVENT HANDLERS

    onAddNewClick: function () {
      this.collection.add(new Hello());
    }

  });

  return HomeView;
});