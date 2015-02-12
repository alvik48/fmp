var gulp = require('gulp');
var reload = require('browser-sync').reload;
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var processor;
var ext;

/* ==============================================
    Styles
    Generate app.css from source files;
    Copy app.css to destination folder
============================================== */

module.exports = function(task, config) {
    switch (config.css) {
        case 'stylus':
            ext = 'styl';
            processor = require('gulp-stylus');
            break;
        case 'scss':
            ext = 'scss';
            processor = require('gulp-sass');
            break;
        case 'less':
            ext = 'less';
            processor = require('gulp-less');
            break;
        default:
            ext = 'css';
            processor = require('gulp-cssimport');
    }

    gulp.task(task, function() {
        gulp.src('styles/app.' + ext)
            .pipe(sourcemaps.init())
            .pipe(processor())
            .pipe(autoprefixer(config.autoprefixr))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.tmp/styles'))
            .pipe(reload({stream:true}));
    });
};