'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower');

gulp.task('start-node', function() {
  return nodemon({
    script: 'server.js'
  });
});

gulp.task('bower', function() {
  return bower();
});