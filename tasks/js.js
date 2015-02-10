var gulp = require('gulp');
var reload = require('browser-sync').reload;
var include = require('gulp-include');
var sourcemaps = require('gulp-sourcemaps');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.js + "/" + config.js.src.original;
    var dest = config.paths.temp.js;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(include())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest))
            .pipe(reload({stream:true}));
    });
};