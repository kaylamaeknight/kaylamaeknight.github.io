module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'css/output.css': 'css/input.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['css/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
