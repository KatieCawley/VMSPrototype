'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start-node', function() {
	return nodemon({
		script: 'server.js'
	});
}) ;