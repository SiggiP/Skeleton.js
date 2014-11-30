/**
 * Created by siggi on 24.11.13.
 */
/*global define*/
define(['jquery',
        'underscore',
        'Backbone',
        'backboneMarionette',
        'skeleton/models/formfield',
        'skeleton/views/formfieldview'
], function ($, _, Backbone, Marionette, FormField, FormFieldView) {
    'use strict';

    return function () {
        var defaultConfig = {
                'url': '/json/formfields.json',
                'type': 'json'
            },
            that = this;

        that.options = $.extend(defaultConfig, arguments[0]);

        that.App = new Marionette.Application();

        that.App.addRegions({
            mainRegion: '#main-region'
        });

        // FieldListView
        that.App.FieldListView = Marionette.CollectionView.extend({
            tagName: 'div',
            itemView: FormFieldView,
            initialize: function () {
                this.on('before:render', function() {

                }.bind(this));
            }
        });
        // FieldCollection
        that.App.FieldsCollection = Backbone.Collection.extend({
            model: FormField,
            comparator: 'id'
        });

        that.App.Fields = new that.App.FieldsCollection();

        that.create = function (options) {

            var dfdObj = $.Deferred();

            if (typeof options !== 'object') {
                throw new Error('missing options parameter');
            }

            that.options = $.extend(that.options, options);

            switch (that.options.type) {
            default:
                dfdObj = that.loadJSON();
                break;
            }

            dfdObj.done(function (data) {
                // creating models
                $.each(data, function (idx, list) {
                    $.each(list, function (idx2, modeldef) {
                        that.App.Fields.add(new FormField(modeldef));
                    });
                });
            }).done(function () {
                that.App.on('initialize:after', function () {
                    that.App.formFieldsView = new that.App.FieldListView({
                        collection: that.App.Fields
                    });
                    // show the formfields
                    that.App.mainRegion.show(that.App.formFieldsView);
                });
            }, function () {
                that.App.start();
            });
        };

        that.loadJSON = function () {
            return $.getJSON(this.options.url);
        };

        return that;
    }; // end return
});