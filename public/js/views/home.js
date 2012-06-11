/**
 * @fileOverview
 * View that manages and renders the Home page.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/hello',
  'collections/hellos',
  'templates/home',
  // bootstrap plugins must be required, but are just appended to jquery as
  // plugins so the instances need not be referneced.
  'bootstrapAlert'
],
/**
 * @returns {Backbone.View}
 */
function($, _, Backbone, Handlebars,
  Hello, Hellos, homeTpl) {
  'use strict';

  var HomeView;

  /**
   * @constructor
   */
  HomeView = Backbone.View.extend({

    /**
     * @private
     */
    template: homeTpl,

    /**
     * @private
     */
    events: {
      'click .add-new': 'onAddNewClick',
      'click .bootstrap-plugin-test-alert': 'onAlertCloseClick'
    },

    el: $('#main-container'),

    initialize: function () {
      // Bind all non-event handler methods to 'this'.
      _.bindAll(this, 'render');

      this.collection.on('add', this.render);
      this.collection.on('reset', this.render);
    },

    /**
     * @public
     * @returns {Backbone.View}
     */
    render: function () {
      this.$el.html(this.template({
        // this should work if underscore.string was setup properly
        title: _.trim('Home Title    '),
        hellos: this.collection.toJSON()
      }));

      return this;
    },


    // EVENT HANDLERS

    /**
     * @private
     * @param {Event} e
     */
    onAlertCloseClick: function (e) {
      this.$('.bootstrap-plugin-test-alert').alert('close');
    },

    /**
     * @private
     * @param {Event} e
     */
    onAddNewClick: function (e) {
      this.collection.add(new Hello());
    }

  });

  return HomeView;
});
