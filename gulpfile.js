var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var server = require('gulp-express')

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
]

gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
})

gulp.task('server', function () {
  server.run(['server.js'])
})

gulp.task('default', ['sass', 'server'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass'])
})
