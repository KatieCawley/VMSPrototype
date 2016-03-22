'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower'),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir');



requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('start-app', function() {
  return nodemon({
    script: 'server.js'
  });
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('new-machine', ['bower'], function() {});

gulp.task('build', function() {
	runSequence('jshint');
});

