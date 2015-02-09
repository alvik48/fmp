var gulp = require('gulp');
var reload = require('browser-sync').reload;
var include = require('gulp-file-include');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = [
        config.paths.src.html + '/*.html',
        config.paths.src.html + config.html.partials
    ];
    var dest = config.paths.temp.html;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(include())
            .pipe(gulp.dest(dest))
            .pipe(reload({stream:true}));
    });
};