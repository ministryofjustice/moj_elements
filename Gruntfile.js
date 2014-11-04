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
    sass: {
      build: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'build/stylesheets/moj.tabs.css': 'src/stylesheets/moj.tabs.scss'
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
        dest: 'build/'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass', 'copy']);

};
