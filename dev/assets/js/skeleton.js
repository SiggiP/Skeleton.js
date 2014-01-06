/**
 * Created with JetBrains PhpStorm.
 * User: siggi
 * Date: 28.10.13
 * Time: 13:46
 * To change this template use File | Settings | File Templates.
 */
/*global window, exports, module*/
(function (factory) {
  'use strict';
  if (typeof exports === 'object') {
    var formbuilder = require('skeleton/formbuilder');
    module.exports = factory(formbuilder);
  }else if (typeof define === 'function' && define.amd) {
    // AMD. Register skeleton modules.
    define(['skeleton/formbuilder'], factory);
  } else {
    // Browser globals
    window.Skeleton = factory(window.formbuilder);
  }
}(function(formbuilder) {
  'use strict';
  return {'FormBuilder': formbuilder};
}));

