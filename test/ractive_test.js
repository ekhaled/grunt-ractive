'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.injector = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  amd: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/dest/clock_amd.js');
    var expected = grunt.file.read('test/expected/clock_amd.js');
    test.equal(actual, expected, 'AMD modules should match expected results');

    test.done();
  },
  cjs: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/dest/clock_cjs.js');
    var expected = grunt.file.read('test/expected/clock_cjs.js');
    test.equal(actual, expected, 'CJS modules should match expected results');

    test.done();
  },
  es6: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/dest/clock_es6.js');
    var expected = grunt.file.read('test/expected/clock_es6.js');
    test.equal(actual, expected, 'ES6 modules should match expected results');

    test.done();
  }
};
