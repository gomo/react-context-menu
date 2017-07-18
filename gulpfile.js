var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var webpackStream = require('webpack-stream');

function logError(error){
  notifier.notify({
    title: error.plugin,
    message: error.message
  })

  gutil.log(error)
}

gulp.task('build-sass', function() {
  return gulp.src(['src/sass/*.scss', 'src/sass/**/*.scss'])
    .pipe(compass({
      css: 'dist/css',
      sass: 'src/sass',
      image: 'dist/img',
      import_path: ["src/sass"]
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    ;
});

gulp.task('watch-sass', function() {
  gulp.watch(['src/sass/*.scss', 'src/sass/**/*.scss']);
});

gulp.task('build-example', function() {
  var config = require('./example/webpack.config.js');
  return gulp.src('example/app.jsx')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('example'))
});

gulp.task('build-src', function() {
  var config = require('./src/webpack.config.js');
  return gulp.src('src/index.es6')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('./'))
});


gulp.task('default', ['watch-sass', 'build-src', 'build-example'])
