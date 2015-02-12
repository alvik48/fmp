var gulp = require('gulp');
var reload = require('browser-sync').reload;
var include = require('gulp-include');
var sourcemaps = require('gulp-sourcemaps');

/* ==============================================
    JS
    Include all required JS files to app.js;
    Copy app.js file to destination folder
============================================== */

module.exports = function(task, config) {
    gulp.task(task, function() {
        gulp.src('js/app.js')
            .pipe(sourcemaps.init())
            .pipe(include())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.tmp/js'))
            .pipe(reload({stream:true}));
    });
};