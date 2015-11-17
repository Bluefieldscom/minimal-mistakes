'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'assets/js/app.min.js': [
            'assets/js/vendor/modernizr-2.7.1.custom.min.js',
            'assets/js/vendor/jquery-1.9.1.min.js',
            'assets/js/plugins/*.js',
            'assets/js/main.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    watch: {
      js: {
        files: [
          'assets/js/**/*.js'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    },
    // uncss: {
    //   options: {
    //     htmlroot: "_site",
    //     report: 'min',
    //     stylesheets: ["/assets/css/main.css"]
    //   },
    //   dist: {
    //     src: ['_site/**/*.html'],
    //     dest: "assets/css/main.uncss.css"
    //   }
    // },

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-newer');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'newer:uglify',
    // 'newer:uncss',
    'newer:imagemin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};