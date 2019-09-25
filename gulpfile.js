'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

sass.compiler = require('node-sass');

const buildFull = () => {
  return gulp.src('./src/scss/classin.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
}

const buildFullMin = () => {
  return gulp.src('./dist/classin.css')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./dist/'));
}


const buildAll = gulp.series(  
  // clean,
  // gulp.parallel(func1, func2),
  buildFull,
  buildFullMin,
);


exports.buildFull = buildFull;
exports.buildFullMin = gulp.series(buildFull, buildFullMin);
exports.default = buildAll;