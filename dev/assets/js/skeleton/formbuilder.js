/**
 * Created by siggi on 24.11.13.
 */
/*global window, exports, module*/
(function (factory) {
  'use strict';
  if(typeof exports === 'object'){
    var jquery = require('jquery'),
      underscore = require('underscore'),
      backbone = require('backbone'),
      Marionette = require('backboneMarionette'),
      formfield = require('skeleton/models/formfield'),
      formfieldview = require('skeleton/views/formfieldview');
    module.exports = factory(jquery, underscore, backbone, Marionette, formfield, formfieldview);
  }else if (typeof define === 'function' && define.amd) {
    // AMD. Register skeleton module.
    define([
      'jquery',
      'underscore',
      'backbone',
      'backboneMarionette',
      'skeleton/models/formfield',
      'skeleton/views/formfieldview'
    ],
      factory);
  } else {
    // Browser globals
    window.formbuilder = factory(window.jQuery, window._, window.Backbone, window.Marionette, window.FormField, window.FormFieldView);
  }
}(function($, _, Backbone, Marionette, FormField, FormFieldView) {
  'use strict';
  return function(){
    var defaultConfig = {
        'url': '/json/formfields.json',
        'type': 'json'
      },
      that = this;

    this.Templates = {};

    that.options = $.extend( defaultConfig, arguments[0] );

    that.App = new Marionette.Application();

    that.App.addRegions( {
      mainRegion: '#main-region'
    } );

    var SkeletonTemplate = Backbone.Model.extend({
      defaults: {
        'usage': 'formfield',
        'type': 'input-text',
        'content': ''
      }
    });
    // TemplateCollection
    var TemplateCollection = Backbone.Collection.extend({
      model: SkeletonTemplate
    });

    that.TemplateCollection = new TemplateCollection();

    // FieldListView
    that.App.FieldListView = Marionette.CollectionView.extend( {
      tagName: 'div',
      itemView: FormFieldView
    } );
    // FieldCollection
    that.App.FieldsCollection = Backbone.Collection.extend( {
      model: FormField
    } );

    that.App.Fields = new that.App.FieldsCollection();

    that.create = function ( options ) {

      var dfdObj = $.Deferred();

      if ( typeof options !== 'object' ) {
        throw new Error( 'missing options parameter' );
      }

      that.options = $.extend( that.options, options );

      switch ( that.options.type ) {
        case 'json':
          dfdObj = that.loadJSON();
          break;
      }

      dfdObj.done(function ( data ) {
        // creating models
        $.each( data, function ( idx, list ) {
          $.each( list, function ( idx2, modeldef ) {
            $.when(that.loadTemplates(modeldef) ).then(function(){
              var _m = new FormField( modeldef );
              that.App.Fields.add( _m );
            } );
          } );
        } );
      } ).done( function () {

          // console.log( 'json loaded' );
          that.App.on( 'initialize:after', function () {
            that.App.formFieldsView = new that.App.FieldListView( {
              collection: that.App.Fields
            } );
            // show the formfields
            that.App.mainRegion.show( that.App.formFieldsView );
          } );
        }, function () {
          that.App.start();
        } );
    };

    that.loadJSON = function () {
      return $.getJSON( this.options.url);
    };

    /**
     *
     * @param modeldef
     */
    that.loadTemplates = function ( modeldef ) {

      var dfdObj = new $.Deferred();

      var templateObj = _.find(that.TemplateCollection, function(model) {
        return model.type === modeldef.type;
      });

      if ( _.isUndefined(templateObj) ) {
        // loading template from file
        $.get('assets/js/skeleton/templates/input-' + modeldef.type + '-template.html',
          function ( data ) {
            modeldef.template = data;
            var tpl = new SkeletonTemplate({
              'type': modeldef.type,
              'content': data
            });
            that.TemplateCollection.add(tpl);
            dfdObj.resolve();
          }
        );
      }else{
        modeldef.template = templateObj.content;
        dfdObj.resolve();
      }
      return dfdObj.promise();
    };
    return that;
  };// end return
}));
