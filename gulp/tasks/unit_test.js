const istanbul = require('gulp-istanbul'),
      gulp = require('gulp'),
      jasmine = require('gulp-jasmine');

gulp.task('instrument-app', () => {
  return gulp.src('app/**.js')
  .pipe(istanbul({}))
  .pipe(istanbul.hookRequire());
});

gulp.task('unit', ['instrument-app'], () =>{
  gulp.src('test/app/**.js')
  .pipe(jasmine({}))
  .pipe(istanbul.writeReports({}));
});
