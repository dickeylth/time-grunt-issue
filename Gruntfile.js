module.exports = function (grunt) {
    'use strict';
    require('time-grunt')(grunt, (stats, done) => {
      console.log(stats);
      done();
    })

    // Project configuration
    grunt.initConfig({
      // Metadata
      pkg: grunt.file.readJSON('package.json')
    });

    // These plugins provide necessary tasks
    grunt.registerTask('test', function () {
      var done = this.async();
      grunt.log.writeln('>> test...');
      setTimeout(() => {
        grunt.log.writeln('>> test task done.');
        done();
      }, Math.random() * 1000);
    })

    // Default task
    grunt.registerTask('default', ['test']);
};

