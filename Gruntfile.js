/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      javascripts: {
        src: ['src/javascripts/**/*.js']
      }
    },

    jasmine: {
      javascripts: {
        src: [
          'src/javascripts/moj.js',
          '<%= jshint.javascripts.src %>'
        ],
        options: {
          vendor: [
            'node_modules/jquery-browser/lib/jquery.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'bower_components/handlebars/handlebars.js'
          ],
          specs: 'spec/javascripts/unit/*Spec.js',
          keepRunner: true
        }
      }
    },

    sass: {
      build: {
        files: {
          'dist/stylesheets/moj.tabs.css': 'src/stylesheets/moj.tabs.scss'
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      javascripts: {
        files: '<%= jshint.javascripts.src %>',
        tasks: ['jshint:javascript']
      },
      stylesheets: {
        files: '<%= jshint.stylesheets.src %>',
        tasks: ['sass:stylesheets']
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: 'javascripts/**',
        dest: 'dist/'
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine', 'sass', 'copy']);

};
