const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  /* need to change this file below*/
  return src('default-sass/**/*.scss') //**means any sub folder of scss will be watched, but not compiled since the folders have _ */
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(purgecss({ content: ['*.html'] }))
      .pipe(dest('css'))
}
  


function watchTask() {
  /**need to change this file below */
  watch(['default-sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)