'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  bower = require('gulp-bower'),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir'),
  tar = require('gulp-tar'),
  execSync = require('child_process').execSync,
  del = require('del');


requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('start-app', function() {
  return nodemon({
    script: 'app/server.js'
  });
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('copy-to-build', ['clean'], () => {
  return gulp.src(['./package.json', '*app/**', '*client/**', '*bower_components/**'])
  .pipe(gulp.dest('build'));
});

gulp.task('prod-modules', ()=> {
  return execSync('npm install --production --prefix build');
});

gulp.task('clean',() =>{
  return del.sync(['build','dist']);
});

gulp.task('dist', ()=>{
  runSequence('clean', 'copy-to-build', 'prod-modules', 'zip');
});

gulp.task('new-machine', ['bower'], function() {});

gulp.task('zip', ()=>{
  return gulp.src(['build/**'])
  .pipe(tar('vms.tar'))
  .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
	runSequence('jshint');
});
