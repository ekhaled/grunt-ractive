'use strict';

var path = require('path');

module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.loadTasks('tasks');

  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    ractive:{
      main:{
        options:{
          type: 'cjs'
        },
        files:{
          'test/dest/': 'test/src/*'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  grunt.registerTask('default', ['jshint']);


}