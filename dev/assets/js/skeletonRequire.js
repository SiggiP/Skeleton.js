/**
 * Created by siggi on 24.11.13.
 */
require.config({
    baseUrl: 'assets/js/',
    urlArgs: '_=' + (new Date()).getTime(),
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
        'skeleton': 'skeleton',
        'app': 'app'
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

require(['app'], function (App) {
    'use strict';
    App.initialize();
});