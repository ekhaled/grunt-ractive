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
      es6:{
        options:{
          type: 'es6'
        },
        files:{
          'test/dest/clock_es6.js': 'test/src/clock.html'
        }
      },
      amd:{
        options:{
          type: 'amd'
        },
        files:{
          'test/dest/clock_amd.js': 'test/src/clock.html'
        }
      },
      cjs:{
        options:{
          type: 'cjs'
        },
        files:{
          'test/dest/clock_cjs.js': 'test/src/clock.html'
        }
      },
      names:{
        options:{
          type: 'cjs'
        },
        files:{
          'test/dest/tmp1/': 'test/src/*'
        }
      },
      defs:{
        files:{
          'test/dest/tmp2/': 'test/src/*'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    clean: {
      tests: ['test/dest/*'],
    }

  });

  grunt.registerTask('test', ['clean', 'ractive', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);


};