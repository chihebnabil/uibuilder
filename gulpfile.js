var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var files = [
  'js/functions.js',
  'js/app.js'
];

gulp.task('default', function() {

  return gulp.src(files)
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest('scripts'));

});
