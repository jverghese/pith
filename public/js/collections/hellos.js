define([
  'underscore',
  'backbone',
  'models/hello'
],
function(_, Backbone, Hello){
  'use strict';

  var Hellos;

  // PRIVATE

  function myPrivate() {
    // do private stuff
  }

  // PUBLIC

  Hellos = Backbone.Collection.extend({

    model: Hello,

    helperFunction: function () {
      // do public stuff
      console.log('public helper function');
    }

  });

  return Hellos;
});
