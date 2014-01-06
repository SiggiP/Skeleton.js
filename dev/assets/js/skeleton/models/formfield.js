/**
 * Created by siggi on 01.12.13.
 */
/*global window, exports, module*/
(function (factory) {
  'use strict';
  if(typeof exports === 'object'){
    var backbone = require('backbone');
    module.exports = factory(backbone);
  }else if (typeof define === 'function' && define.amd) {
    define(['backbone'], factory);
  }else{
    window.FormField = factory(window.Backbone);
  }
}(function(Backbone) {
  'use strict';
  return Backbone.Model.extend( {
    defaults: {
      'id': 0,
      'name': 'unknown',
      'label': 'unknown',
      'group': 'unknown',
      'mandatory': true,
      'type': 'text',
      'value': '',
      'placeholder': '',
      'template': '',
      'options': {
        'template': '',
        'data': []
      }
    }
  } );
}));