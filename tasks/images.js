var gulp = require('gulp');
var reload = require('browser-sync').reload;

/* ==============================================
    Images
    Copy images to destination folder
    excluding sprite source files
============================================== */

module.exports = function(task, config) {
    gulp.task(task, function() {
        gulp.src(['images/**/*.*', '!images/sprite/*.*'])
            .pipe(gulp.dest('.tmp/images'))
            .pipe(reload({stream: true}));
    });
};