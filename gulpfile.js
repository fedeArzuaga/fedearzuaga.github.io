// List dependencies
const { src, dest, watch, series } = require('gulp');
const compileLess = require('gulp-less');
const prefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');

// Created functions

// HTML
function html() {
    return src('./src/*.html')
        .pipe( htmlmin({ collapseWhitespace: true }) )
        .pipe( dest('./dist') )
}

// Less
function less() {
    return src('src/less/**/*.less')
        .pipe( compileLess({
            plugins: [require('less-plugin-glob')]
        }))
        .pipe( prefixer() )
        .pipe( minify() )
        .pipe(dest('./dist/css'))
}

// Images
function images() {
    return src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg'])
        .pipe(dest('./dist/images'))
}

// JS
function js() {
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('./dist/js'))
}
 
// Browser-sync
function browsersyncServe( callback ) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    })
    callback();
}

function browsersyncRelaod( callback ) {
    browsersync.reload();
    callback();
}

// Create watch tasks
function watchTasks() {
    watch('./src/*.html', series(html, browsersyncRelaod));
    watch('./src/less/**/*.less', series(less, browsersyncRelaod));
    watch('./src/images/**/*.{jpg,png,svg}', series(images, browsersyncRelaod));
    watch('./src/js/**/*.js', series(js, browsersyncRelaod));
}

// Default gulp
exports.default = series(
    html,
    less,
    images,
    js,
    browsersyncServe,
    watchTasks
);