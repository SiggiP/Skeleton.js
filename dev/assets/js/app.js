/**
 * Created by siggi on 24.11.13.
 */
/*global window,exports,module*/
(function (factory) {
  'use strict';
  if(typeof exports === 'object'){
    var skeleton = require('skeleton');
    module.exports = factory(skeleton);
  }else if (typeof define === 'function' && define.amd) {
    define(['skeleton'], factory);
  }else{
    window.app = factory(window.Skeleton);
  }
}(function(Skeleton) {
  'use strict';
  var mySkeletonApp = new Skeleton.FormBuilder();
  mySkeletonApp.create({
    'url': 'json/formfields.json',
    'type':'json'
  });
  return mySkeletonApp;
}));
