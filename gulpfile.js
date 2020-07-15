// Initialize modules
const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// File path variables
const files = {
    scssPath: './src/styles/**/*.scss',
    jsPath: './src/scripts/**/*.js',
    htmlPath: './src/**/*.html'
}

// HTML task
function htmlTask() {
    return src(files.htmlPath)
        .pipe(dest('./build'));
}

// Sass task
function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css')
    );
}

// JS task
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./build/js')
    );
}

// Watch task
function watchTask() {
    watch([files.htmlPath, files.scssPath, files.jsPath], 
        parallel(htmlTask, scssTask, jsTask));
}

// Default task
exports.default = series(
    parallel(htmlTask, scssTask, jsTask),
    watchTask
);