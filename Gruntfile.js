module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    var extensions = ['html', 'css', 'png', 'svg', 'jpg', 'eot', 'woff', 'woff2', 'ttf', 'otf'];
    grunt.config('copy', {
        files: {
            cwd: './src',
            src: extensions.map(function(ext){ return '**/*.'+ext; }),
            dest: './dist_grunt/',
            expand: true
        }
    });

    grunt.config('clean', {
        build: {
            src: ['dist_grunt']
        }
    });

    grunt.config('browserify', {
        dist: {
            files: {
                'dist_grunt/bundle.js': ['src/app.js']
            },
            options: {
                transform: ['babelify'],
                browserifyOptions: {
                    debug: true
                }
            }
        }
    });

    grunt.config('uglify', {
        scripts: {
            src: './dist_grunt/bundle.js',
            dest: './dist_grunt/bundle.min.js',
            options: {
                mangle: true,
                compress: true
            }
        }
    });

    grunt.registerTask('build:prod', ['clean', 'browserify', 'uglify', 'copy']);
    grunt.registerTask('build', ['clean', 'browserify', 'copy']);
};
