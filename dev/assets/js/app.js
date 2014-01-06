/**
 * Created by siggi on 24.11.13.
 */
/**/
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['skeleton'], factory);
  }else{
    factory(window.Skeleton);
  }
}(function(Skeleton) {
  'use strict';
  var mySkeletonApp = new Skeleton.FormBuilder();
  mySkeletonApp.create({
    'url': 'json/formfields.json',
    'type':'json'
  });
  if (typeof define === 'function' && define.amd) {
    var initialize = function () {
      // may not required
    };
    return {
      initialize: initialize
    };
  }
}));
