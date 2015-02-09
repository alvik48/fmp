var gulp = require('gulp');
var reload = require('browser-sync').reload;
var include = require('gulp-include');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.js + "/" + config.js.src.original;
    var dest = config.paths.temp.js;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(include())
            .pipe(gulp.dest(dest))
            .pipe(reload({stream:true}));
    });
};