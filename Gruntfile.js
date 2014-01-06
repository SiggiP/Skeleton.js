/*global module*/
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    concat: {
      dist: {
        src: ['dev/assets/js/vendor/jquery.js',
              'dev/assets/js/vendor/bootstrap.js',
              'dev/assets/js/vendor/underscore.js',
              'dev/assets/js/vendor/backbone.js',
              'dev/assets/js/vendor/backbone.marionette.js',
              'dev/assets/js/skeleton/models/formfield.js',
              'dev/assets/js/skeleton/views/formfieldview.js',
              'dev/assets/js/skeleton/formbuilder.js',
              'dev/assets/js/skeleton.js'
        ],
        dest: 'dist/assets/js/skeleton.js'
      }
    },
    uglify: {
      dist: {
        src: ['dist/assets/js/skeleton.js'],
        dest: 'dist/assets/js/skeleton.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['concat','uglify']);

};