module.exports = function(grunt) {
	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
          hostname: 'localhost',
          port: 3000,
          livereload: true
        }
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {                         
					'src/css/main.css': 'src/scss/main.scss',       
				}
			}
		},
		watch: {
			scripts: {
				files: ['*.html', 'src/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},
	});
	
	grunt.registerTask('default', ['sass', 'connect', 'watch']);
};