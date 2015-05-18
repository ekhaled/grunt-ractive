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
        return createComponent(filepath, options.type);
      }).map(function (o) {
        grunt.file.write(path.join(f.dest, o.name), o.component);
      });

    });

    function createComponent (filepath, type) {
      return {
        name: makeComponentName(filepath),
        component: builders.amd(rcu.parse(grunt.file.read(filepath)))
      }
    }

    function makeComponentName (filepath) {
      return filepath.split(path.sep).pop()
      .replace('.html', '')
      .replace(/\s/g, '_') + '.js';
    }


  });


}