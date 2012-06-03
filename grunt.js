/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-recess');
  var recessPath = './node_modules/recess/bin/recess';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        '<%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      grunt: 'grunt.js',
      server: ['lib/**/*.js', 'app/**/*.js'],
      specs: 'spec/**/*.js',
      client: 'public/**/*.js'
    },
    recess: {
      dist: {
        src: ['public/less/base.less'],
        dest: 'public/dist/style.css',
        options: {
          compile: true
        }
      }
    },

    //concat: {
      //dist: {
        //src: ['<banner:meta.banner>',
          //'<file_strip_banner:lib/<%= pkg.name %>.js>'],
        //dest: 'public/dist/<%= pkg.name %>.js'
      //}
    //},
    //min: {
      //dist: {
        //src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        //dest: 'public/dist/<%= pkg.name %>.min.js'
      //}
    //},
    //watch: {
      //files: '<config:lint.files>',
      //tasks: 'lint qunit'
    //},
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
  //grunt.registerTask('default', 'lint qunit concat min');

  grunt.registerTask('default', 'lint recess');

  grunt.registerTask('css', 'recess');
};
