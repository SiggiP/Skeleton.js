/**
 * Created by siggi on 24.11.13.
 */
require.config({
  // baseUrl: './assets/js',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    'json2': 'vendor/json2',
    'underscore': 'vendor/underscore',
    'text': 'vendor/text',
    'backbone': 'vendor/backbone',
    'backbone.wreqr': 'vendor/amd/backbone.wreqr',
    'backbone.babysitter': 'vendor/amd/backbone.babysitter',
    'backboneMarionette': 'vendor/amd/backbone.marionette',
    'skeleton': 'skeleton'
  },
  shim: {
    'backbone': {
      'deps': ['jquery', 'underscore', 'text'],
      'exports': 'Backbone'
    },
    'underscore': {
      'deps': ['text'],
      'exports': '_'
    },
    'bootstrap': {
      'deps': ['jquery'],
      'exports': 'jquery'
    }
  }
});

require(['skeleton','app'], function(Skeleton, App){
  'use strict';
  App.initialize();
});