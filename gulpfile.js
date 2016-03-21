'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower'),
	requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('start-node', function() {
  return nodemon({
    script: 'server.js'
  });
});

gulp.task('bower', function() {
  return bower();
});
