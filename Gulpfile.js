/* globals require, console */
"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var serve = require('gulp-serve');
var del = require('del');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

var paths = {
	"scripts": 'src/**/*.js',
	"css": "src/**/*.css"
};

gulp.task("js", function (){
	var b = browserify({
		entries: './src/app',
		debug: true
	}).transform(babelify);

	return b.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(uglify({'compress': true}))
    	.pipe(gulp.dest("dist_gulp"));
});

gulp.task('lint', function(){
	return gulp.src(['**/*.js','!node_modules/**','!dist_gulp/**'])
        .pipe(eslint()) // eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
        .pipe(eslint.format()); // eslint.format() outputs the lint results to the console. Alternatively use eslint.formatEach() (see Docs).
});

gulp.task('copy', function () {
	var extensions = ['html', 'css', 'png', 'svg', 'jpg', 'eot', 'woff', 'woff2', 'ttf', 'otf'];
	return gulp
		.src(extensions.map(function(ext){ return './src/**/*.'+ext; }))
		.pipe(gulp.dest('dist_gulp'));
});

gulp.task("clean", function(){
	del(["distdist_gulp"]);
});

gulp.task('serve', serve('dist_gulp'));

gulp.task('watch', function() {
	gulp.watch([paths.scripts, "src/**/*"], ['lint', 'js', 'copy']);
});

//Collections
gulp.task("default", ['lint', 'js', 'copy']);
gulp.task("rebuild", ['clean', 'default']);
gulp.task("dev", ['clean', 'lint', 'js', 'copy', 'watch', 'serve']);
