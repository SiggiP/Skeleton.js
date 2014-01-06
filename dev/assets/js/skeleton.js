/**
 * Created with JetBrains PhpStorm.
 * User: siggi
 * Date: 28.10.13
 * Time: 13:46
 * To change this template use File | Settings | File Templates.
 */
/*global window*/
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register skeleton module.
    define(['skeleton/formbuilder'], factory);
  } else {
    // Browser globals
    window.Skeleton = factory(window.formbuilder);
  }
}(function(formbuilder) {
  'use strict';
  return {'FormBuilder': formbuilder};
}));

