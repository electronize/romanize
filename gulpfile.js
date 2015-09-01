var gulp = require('gulp');
var watch = require('gulp-watch');
var del = require('del');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

/**
  Call this task indepedently Using 'gulp js'
**/
gulp.task('js', function() {
  gulp.watch('./src/assets/js/*.js', ['js']);
  return gulp.src('./src/assets/js/*.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production,
    }))
    .pipe(concat('build.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(notify({ message: 'scripts task finished!' }));
});

gulp.task('clean', function(cb) {
  del(['./dist/assets'], cb);
});

/**
  default task by 'gulp' and do js task
**/
gulp.task('default', ['js']);
