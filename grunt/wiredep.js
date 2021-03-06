// wiredep.js - grunt task
// Insert bower dependencies into their designated files.
//   wiredep
//   wiredep:dev

/* global module */
module.exports = function(grunt) {
  'use strict';
  var wiredep = grunt.config('wiredep') ||  {};

  wiredep.dev = {
    src: [
      'src/index.html',
      'src/styles/app.less'
    ],
    options: {
      exclude: grunt.config.get('bwr').exclude
    }
  };

  grunt.config('wiredep', wiredep);
  grunt.loadNpmTasks('grunt-wiredep');
};
