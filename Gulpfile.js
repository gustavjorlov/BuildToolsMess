/* globals require, console */
"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require("browserify");
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
	});

	//Also, 
		//lint the code.


	return b.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(eslint({
			'rules':{
				'quotes': [1, 'single'],
				'semi': [1, 'always']
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(uglify({'compress': false}))
		.pipe(sourcemaps.write())
    	.pipe(gulp.dest("dist"));
});

gulp.task('copy', function () {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task("css", function(){
	return gulp
		.src(paths.css)
		.pipe(gulp.dest('dist'));
});

gulp.task("clean", function(){
	del(["dist"]);
});

gulp.task('serve', serve('dist'));

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['js']);
});

//Collections
gulp.task("default", ['js', 'css', 'copy', 'serve']);
gulp.task("rebuild", ['clean', 'default']);
gulp.task("dev", ['watch', 'serve']);