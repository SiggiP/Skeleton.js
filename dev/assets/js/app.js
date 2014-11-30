/**
 * Created by siggi on 24.11.13.
 */
/*global define*/
define(['skeleton'], function (Skeleton) {
    'use strict';

    var initialize = function () {
        var mySkeletonApp = new Skeleton.FormBuilder();
        mySkeletonApp.create({
            'url': 'json/formfields.json',
            'type': 'json'
        });

        $(document).ready(function () {

        });
    };

    return {
        initialize: initialize
    };
});