var gulp = require('gulp');

/* ==============================================
    Fonts
    Copy fonts to destination folder
============================================== */

module.exports = function(task, config) {
    gulp.task(task, function() {
        gulp.src('fonts/*.*')
            .pipe(gulp.dest('.tmp/fonts'));
    });
};