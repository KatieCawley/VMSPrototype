const gulp = require('gulp'),
      jshint = require('gulp-jshint');

const jshinter = (src, conf) => {
  return gulp.src(src)
    .pipe(jshint(conf))
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
};

gulp.task('jshint', ['jshint-server', 'jshint-client']);

gulp.task('jshint-server', () => {
  jshinter(['*.js', '*.json', './gulp/**/*.js'], './gulp/.jshintrcserver');
});

gulp.task('jshint-client', () =>  {
  jshinter(['./client/static/js/**/*.js'], './gulp/.jshintrcclient');
});
