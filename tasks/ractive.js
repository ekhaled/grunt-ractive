/*
 * grunt-ractive
 * https://github.com/ekhaled/grunt-ractive
 *
 * Copyright (c) 2015 ekhaled, contributors
 * Licensed under the MIT license.
 * https://github.com/ekhaled/grunt-ractive/blob/master/LICENSE
 */

'use strict';
module.exports = function (grunt) {

  grunt.registerMultiTask('ractive', 'Compile Ractive components with Grunt', function () {

    var options = this.options({type: 'amd'});

    var path = require('path'),
    Ractive = require( 'ractive' ),
    rcu = require( 'rcu' ),
    builders = require( 'rcu-builders' );

    rcu.init( Ractive );

    this.files.forEach(function (f) {

      // check to see if src and dest have been set
      if (typeof f.src === "undefined") {
        grunt.fatal('Need to specify which files to transform.', 2);
      }

      if (typeof f.dest === "undefined") {
        grunt.fatal('Need to specify where the transformed files will be moved to', 2);
      }

      f.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }else{
          return true;
        }
      }).map(function (filepath) {
        return createComponent(filepath, options.type, f.dest);
      }).map(function (o) {
        grunt.file.write(o.destination, o.component);
        grunt.log.writeln('File ' + o.destination + ' created.');
      });

    });

    function createComponent (filepath, type, explicitDestination) {
      var builder = builders[type];
      if(typeof builder === 'undefined' || !builder){
        grunt.fatal('Type \''+type+'\' is not recognised, should be either of \'amd\', \'cjs\' or \'es6\'.', 2);
      }

      var dest = '';

      if (detectDestType(explicitDestination) === 'directory') {
        dest = path.join(explicitDestination, makeComponentName(filepath));
      } else {
        dest = explicitDestination;
      }

      return {
        destination: dest,
        component: builder(rcu.parse(grunt.file.read(filepath)))
      };
    }

    function makeComponentName (filepath) {
      return filepath.split(path.sep).pop()
      .replace(/\.html|\.ract/, '')
      .replace(/\s/g, '_') + '.js';
    }

    function detectDestType (dest) {
      if (grunt.util._.endsWith(dest, '/')) {
        return 'directory';
      } else {
        return 'file';
      }
    }


  });


};