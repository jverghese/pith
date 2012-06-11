/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Variables
  var handlebarsPath = './node_modules/handlebars/bin/handlebars';

  // Load up npm task plugins
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-exec');
  // Load up local tasks
  //grunt.loadTasks('grunt/tasks');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      grunt: 'grunt.js',
      server: ['lib/**/*.js', 'app/**/*.js'],
      specs: 'spec/**/*.js',
      client: 'public/js/**/*.js'
    },
    recess: {
      dist: {
        src: ['public/less/*.less'],
        dest: 'public/dist/style.css',
        options: {
          compile: true
        }
      }
    },
    requirejs: {
      baseUrl: 'public/js',
      name: 'main',
      mainConfigFile: 'public/js/main.js',
      out: 'public/dist/main.built.js',
      preserveLicenseComments: false
    },
    exec: {
      compileTemplates: {
        command: handlebarsPath +
          ' public/templates --output public/dist/templates.js',
        stdout: true
      }
    },
    watch: {
      less: {
        files: ['<config:recess.dist.src>'],
        tasks: 'less'
      },
      lint: {
        files: ['<config:lint.client>', '<config:lint.server>'],
        tasks: 'lint'
      }
    },
    jshint: {
      // Defaults
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        strict: true,
        es5: true,
        trailing: true,
        maxlen: 80
      },
      globals: {
        define: true,
        require: true
      },
      server: {
        options: {
          node: true,
          es5: true,
          strict: true
        },
        globals: {}
      },
      client: {
        options: {
          browser: true
        },
        globals: {}
      },
      specs: {
        options: {},
        globals: {
          jasmine: true,
          describe: true,
          it: true,
          ait: true,
          expect: true,
          spyOn: true,
          beforeEach: true,
          afterEach: true,
          setFixtures: true
        }
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('less', 'recess');
  grunt.registerTask('compile', 'requirejs');
  grunt.registerTask('default', 'lint less templates compile');
  grunt.registerTask('templates', 'exec:compileTemplates');
};
