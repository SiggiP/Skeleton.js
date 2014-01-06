/**
 * Created by siggi on 24.11.13.
 */
require.config({
  // baseUrl: './assets/js',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    // 'json2': 'vendor/json2', // not needed in modern browsers
    'underscore': 'vendor/amd/underscore',
    'backbone': 'vendor/amd/backbone',
    'backbone.wreqr': 'vendor/amd/backbone.wreqr',
    'backbone.babysitter': 'vendor/amd/backbone.babysitter',
    'backboneMarionette': 'vendor/amd/backbone.marionette',
    'skeleton': 'skeleton'
  },
  shim: {
    'underscore': {'exports': '_'},
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'backbone.wreqr': {
      'deps':['underscore']
    },
    'backbone.babysitter': ['backbone.wreqr'],
    'backboneMarionette': ['underscore','backbone.wreqr','backbone.babysitter'],
    'bootstrap': {
      'deps': ['jquery'],
      'exports': 'jquery'
    }
  }
});

require(['skeleton','app'], function(){
  'use strict';
  // do something with app
});