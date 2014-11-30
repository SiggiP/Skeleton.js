/**
 * Created by siggi on 01.12.13.
 */
/*global define*/
define([
    'underscore',
    'backboneMarionette',
    'text!skeleton/templates/input-text-template.html',
    'text!skeleton/templates/input-password-template.html',
    'text!skeleton/templates/input-select-template.html'
], function (_, Marionette, tplText, tplPassword, tplSelect) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'div',
        template: function (model) {
            var tpl = '';
            switch (model.type) {
            case 'password':
                tpl = tplPassword;
                break;
            case 'select':
                tpl = tplSelect;
                break;
            default:
                tpl = tplText;
                break;
            }
            return _.template(tpl)(model);
        }, // really needed
        initialize: function () {
        }
    });
});