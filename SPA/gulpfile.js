var gulp = require('gulp');
var browserSync = require('browser-sync');

var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
let babel = require('gulp-babel');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var pump = require('pump');


var filesJs = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'app/assets/js/src/apiHandler.js',
  'app/assets/js/src/global.js',
];

gulp.task('default', ['scripts', 'lint', 'styles','fonts'], function() {});

gulp.task('scripts', function() {

  gulp.src(filesJs)
  .pipe(concat('dist.js'))
  //.pipe(stripDebug())
  //.pipe(browserify())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  //.pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('app/assets/js/dist'));
});

gulp.task('uglify-error-debugging', function (cb) {
  
  pump([
    gulp.src(filesJs),
    uglify(),
    gulp.dest('app/assets/js/dist')
  ], cb);
});

gulp.task('lint', function() {
  var jshint = require("gulp-jshint");

  var files = [
    'app/assets/scripts/src/global.js'
  ];

  gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('styles', function() {
  var concat = require('gulp-concat');
  var autoprefix = require('gulp-autoprefixer');
  var minifyCSS = require('gulp-minify-css');

  var files = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'app/assets/css/src/global.css'
  ]

  gulp.src(files)
    .pipe(concat('dist.css'))
    .pipe(autoprefix({
      cascade: false,
      browsers: [
        'last 4 versions',
        'ie >= 9'
      ]
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/css/dist/'));
});


gulp.task('sass', function () {
  var sass = require('gulp-sass');
  var rename = require('gulp-rename');
  var autoprefix = require('gulp-autoprefixer');
  return gulp.src('app/assets/styles/src/scss/base.scss')
  .pipe(sass({includePaths: ['./node_modules']}))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefix({
          browsers: ['last 4 versions'],
          remove: false
      }))
      .pipe(rename('sass-compiled.css'))
      .pipe(gulp.dest('app/assets/styles/src/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/assets/styles/src/scss/**/*.scss', ['sass','styles']);
});


gulp.task('watch', function() {
  gulp.watch('app/assets/scripts/src/*.js', ['scripts']);
  gulp.watch('app/assets/styles/src/scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/styles/src/*.css', ['styles']);

});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('app/assets/css/fonts'))
})

gulp.task('server', ['watch'], function() {

  var files = [
    '*.php',
    'app/assets/styles/dist/*.css',
    'app/assets/scripts/dist/*.js'
  ];
});

