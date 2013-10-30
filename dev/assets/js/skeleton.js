/**
 * Created with JetBrains PhpStorm.
 * User: siggi
 * Date: 28.10.13
 * Time: 13:46
 * To change this template use File | Settings | File Templates.
 */
(function($) {
    'use strict';

    var defaultConfig = {
        'url': '/json/formfields.json',
        'type':'json'
    };

    if(typeof Marionette !== 'object'){
        throw new Error('Marionette is undefined');
    }
    if(typeof _ !== 'function'){
        throw new Error('underscore is undefined');
    }

    // make shortcut for Skeleton global
    window.SK = function(){
        this.options = $.extend(defaultConfig,arguments[0]);
        this.App = new Marionette.Application();
        this.App.addRegions({
            mainRegion: '#main-region'
        });
        // field model defaults
        this.App.Field = Backbone.Model.extend({
            defaults: {
                'id': 0,
                'name': 'unknown',
                'label': 'unknown',
                'group': 'unknown',
                'mandatory': true,
                'type': 'text'
            }
        });
        this.App.FieldView = Marionette.ItemView.extend({
            template: '#field-template' // really needed
        });
        this.App.FieldListView = Marionette.CollectionView.extend({
            tagName: 'div',
            itemView: this.App.FieldView
        });
        this.App.FieldsCollection = Backbone.Collection.extend({
            model: this.App.Field
        });
        this.App.Fields = new this.App.FieldsCollection();
        return this;
    };
    // create Form and load field definitions from source
    window.SK.prototype.create = function(options){
        console.log('create Fields');
        if(typeof options !== 'object'){
            throw new Error('missing options parameter');
        }
        this.options = $.extend(this.options, options);
        switch(this.options.type){
        case 'json':
            this.loadJSON();
            break;
        }
    };
    window.SK.prototype.loadJSON = function(){
        var that = this;
        console.log(that.App.Fields);
        $.getJSON(this.options.url, function(data){
            $.each(data, function(idx, list){
                console.log('creating '+idx+': '+list.length);
                $.each(list, function(idx2, modeldef){
                    var _m = new that.App.Field(modeldef);
                    console.log(_m);
                    that.App.Fields.add(_m);
                    // creating the view

                });
            });
            console.log(that.App.Fields);
        });
    };
})(jQuery);