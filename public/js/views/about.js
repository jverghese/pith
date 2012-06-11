/**
 * @fileOverview
 * View that manages and renders the About page.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'templates/about'
],
/**
 * @returns {Backbone.View}
 */
function($, _, Backbone, Handlebars, aboutTpl) {
  'use strict';

  var NavView;

  /**
   * @constructor
   */
  NavView = Backbone.View.extend({

    /**
     * @private
     */
    template: aboutTpl,

    /**
     * @private
     */
    events: {
    },

    el: $('#main-container'),

    initialize: function () {
      _.bindAll(this, 'render');
    },

    /**
     * @public
     * @returns {Backbone.View}
     */
    render: function () {
      this.$el.html(this.template({
      }));

      return this;
    }

  });

  return NavView;

});
