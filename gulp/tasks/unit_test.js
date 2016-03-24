const istanbul = require('gulp-istanbul'),
      gulp = require('gulp'),
      gulpJasmine = require('gulp-jasmine'),
      Jasmine = require('jasmine'),
      reporters = require('jasmine-reporters'),
      istanbulOptions = {
        includeUntested:true
      },
      junitReporters = (reportsDir) =>[
        new reporters.JUnitXmlReporter({
          savePath: reportsDir,
          consolidateAll: false
        }),
        new Jasmine.ConsoleReporter({
          print: console.log
        })
      ];


gulp.task('instrument-app', () => {
  return gulp.src('app/**.js')
  .pipe(istanbul(istanbulOptions))
  .pipe(istanbul.hookRequire());
});

gulp.task('unit', ['instrument-app'], () =>{
  gulp.src('test/unit/app/**.js')
  .pipe(gulpJasmine({
    reporter: junitReporters('reports/unit')
  }))
  .pipe(istanbul.writeReports(istanbulOptions));
});
