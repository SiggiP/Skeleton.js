/**
 * Created by siggi on 01.12.13.
 */
/*global window*/
(function(factory){
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['underscore','backboneMarionette'], factory);
  }else{
    window.FormFieldView = factory(window._, window.Marionette);
  }
}(function(_, Marionette){
  'use strict';
  return Marionette.ItemView.extend( {
    tagName: 'div',
    template: function ( model ) {
      return _.template( model.template, model );
    },
    initialize: function () {
      // window.console.log( 'FieldView ' + '' + ' initialized: ' + this.model.get( 'type' ) );
    }
  } );
}));