var gulp = require('gulp');
var terser = require('gulp-terser');
var clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');


function clear() {
  return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src('./assets/**.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/assets/'));
}

function style2() {
  return gulp.src('./style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
}

/**
 * 压缩assets目录下的js
 * @returns 
 */
function assets() {
  return gulp.src([
    './assets/**.js',
    '!./assets/**-min.js'
  ])
    .pipe(terser({ mangle: false }))
    .pipe(gulp.dest('dist/assets'));
}

/**
 * 压缩script.js
 * @returns 
 */
function scripts() {
  return gulp.src('./script.js')
    .pipe(terser({ mangle: false }))
    .pipe(gulp.dest('dist'));
}

function copy() {
  return gulp.src([
    './assets/**/*',
    './settings/**/*',
    './templates/**/*',
    './manifest.json',
    './style.css',
    './script.js',
    './thumbnail.png',
  ], { base: './', encoding: false })
    .pipe(gulp.dest('dist'));
}

gulp.task()


var build = gulp.series(clear, copy, gulp.parallel(scripts, assets, styles, style2));
exports.build = build;
exports.default = build;