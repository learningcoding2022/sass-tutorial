const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  /* need to change this file below*/
  return src('default-sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  /**need to change this file below */
  watch(['default-sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)