module.exports = function(grunt) {

	grunt.initConfig({

		sass: {
			options: {
				sourcemap: 'none',
				unixNewlines: true,
				style: 'expanded',
				banner: '/*\n' +
				        'Author:     Aleks Hudochenkov\n' +
				        'Release:    <%= grunt.template.today("dd.mm.yyyy") %>\n' +
				        '-----------------------------------------------------------------------------*/\n'
			},
			dev: {
				files: {
					'main.css': 'scss/main.scss'
				}
			},
			debug: {
				files: {
					'main.css': 'scss/main.scss'
				},
				options: {
					sourcemap: 'auto',
					banner: null
				}
			},
			dist: {
				files: {
					'main.css': 'scss/main.scss'
				},
				options: {
					style: 'compressed'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', '> 1%']
			},
			default: {
				src: 'main.css',
				options: {
					map: false
				}
			},
			debug: {
				src: 'main.css',
				options: {
					map: true
				}
			}
		},

		sprite: {
			buildretina: {
				'src': ['img/sprite/*@2x.png'],
				'destImg': 'img/sprite@2x.png',
				'destCSS': 'scss/_sprite.scss',
				'algorithm': 'binary-tree',
				'padding': 20,
				'engine': 'auto'
			},
			build: {
				'src': ['img/sprite/*.png', '!<%= sprite.buildretina.src %>'],
				'destImg': 'img/sprite.png',
				'padding': 10,
				'cssTemplate': 'scss/spritesmith-retina-mixins.template.mustache',

				'cssVarMap': function (sprite) {
					sprite.image = sprite.image.replace(".png", "");
				},
				'algorithm': '<%= sprite.buildretina.algorithm %>',
				'destCSS': '<%= sprite.buildretina.destCSS %>',
				'engine': '<%= sprite.buildretina.engine %>'
			}
		},

		watch: {
			sass: {
				files: ['scss/*.scss'],
				tasks: ['sass:dev', 'autoprefixer:default'],
			},
			sprites: {
				files: ['img/sprite/*.png'],
				tasks: ['sprite'],
			}
		}

	});

	// Start BrowserSync via the API
	// using this code because of bug related to autoprefixer https://github.com/shakyShane/grunt-browser-sync/issues/50
	var bs;
	grunt.registerTask("bs-start", function () {
		var browserSync = require("browser-sync");
		bs = browserSync.init([
			'main.css',
			'*.html',
			'js/*.js',
		], {
			server: {
				baseDir: "./"
			},
			notify: false
		})
	});

	// Fire file-change events manually for greater control
	grunt.registerTask("bs-reload", function () {
		bs.events.emit("file:changed", {path: "main.css"});
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['sass:dev', 'autoprefixer:default', 'bs-start', 'watch']);
	grunt.registerTask('debug', ['sass:debug', 'autoprefixer:debug', 'bs-start', 'watch']);
	grunt.registerTask('build', ['sprite', 'sass:dist', 'autoprefixer:default']);

};
