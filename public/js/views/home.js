define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/hello',
  'collections/hellos',
  'text!templates/home.hbs',

  // bootstrap plugins must be required, but are just appended to jquery as
  // plugins so the instances need not be referneced.
  'bootstrapAlert'
],
function($, _, Backbone, Handlebars,
  Hello, Hellos, homeTpl) {
  'use strict';

  var HomeView = Backbone.View.extend({

    el: $('#main-container'),

    template: Handlebars.compile(homeTpl),

    events: {
      'click .add-new': 'onAddNewClick',
      'click .bootstrap-plugin-test-alert': 'onAlertCloseClick'
    },

    initialize: function () {
      // Bind all non-event handler methods to 'this'.
      _.bindAll(this, 'render');

      this.collection.on('add', this.render);
      this.collection.on('reset', this.render);
    },

    render: function () {
      this.$el.html(this.template({
        // this should work if underscore.string was setup properly
        title: _.trim('Home Title    '),
        hellos: this.collection.toJSON()
      }));

      return this;
    },


    // EVENT HANDLERS

    onAlertCloseClick: function () {
      this.$('.bootstrap-plugin-test-alert').alert('close');
    },

    onAddNewClick: function () {
      this.collection.add(new Hello());
    }

  });

  return HomeView;
});
