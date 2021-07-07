const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

function style() {
    return gulp.src('./public/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
}

exports.style = style;