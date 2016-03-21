'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower'),
  requireDir = require('require-dir'),
  sass = require('gulp-sass'),
	concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
	del = require('del');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('start-app', ['build'], function() {
  return nodemon({
    script: 'server.js'
  });
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('new-machine', ['bower'], function() {});

gulp.task('build', ['app-css']);

gulp.task('clean', function() {
	return del.sync(['public']);
});

gulp.task('app-css', () => {
  return gulp.src('client/static/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});