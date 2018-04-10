'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		project: {
			assets   : ['assets'],
			css      : '<%= project.assets %>/css/style.css',
			sass     : ['<%= project.assets %>/css/sass/style.scss']
		},

		sass: {
			dev: {
				options: {
					outputStyle: 'expanded',
					compass: false
				},
				files: {
					'<%= project.css %>':'<%= project.sass %>'
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					compass: false
				},
				files: {
					'<%= project.css %>':'<%= project.sass %>'
				}
			}
		},

		watch: {
			gruntfile: {
				files: 'Gruntfile.js'
			},
			
			sass: {
				files: '<%= project.assets %>/css/sass/**/*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass:dist']);

	grunt.registerTask('default', ['build', 'watch']);
};