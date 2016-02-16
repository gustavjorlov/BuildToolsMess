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

gulp.task("js", function () {
	var b = browserify({
		entries: './src/app',
		debug: true
	}).transform(babelify);

	return b.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(uglify({'compress': true}))
    	.pipe(gulp.dest("dist"));
});

gulp.task('lint', function(){
	return gulp.src(['**/*.js','!node_modules/**','!dist/**'])
        .pipe(eslint()) // eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
        .pipe(eslint.format()) // eslint.format() outputs the lint results to the console. Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.failAfterError()); // To have the process exit with an error code (1) on lint error, return the stream and pipe to failAfterError last.
});

gulp.task('copy', function () {
	return gulp
		.src(['./src/**/*.html', './src/**/*.css'])
		.pipe(gulp.dest('dist'));
});

/*gulp.task("css", function(){
	return gulp
		.src(paths.css)
		.pipe(gulp.dest('dist'));
});*/

gulp.task("clean", function(){
	del(["dist"]);
});

gulp.task('serve', serve('dist'));

gulp.task('watch', function() {
	gulp.watch([paths.scripts, "src/**/*"], ['js', 'copy']);
});

//Collections
gulp.task("default", ['lint', 'js', 'copy', 'serve']);
gulp.task("rebuild", ['clean', 'default']);
gulp.task("dev", ['watch', 'serve']);