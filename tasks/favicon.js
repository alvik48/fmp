var gulp = require('gulp');
var reload = require('browser-sync').reload;

/* ==============================================
    Favicon
    Copy favicon to destination folder
============================================== */

module.exports = function(task, config) {
    gulp.task(task, function() {
        gulp.src(['*.png', '*.ico'])
            .pipe(gulp.dest('.tmp'))
            .pipe(reload({stream:true}));
    });
};