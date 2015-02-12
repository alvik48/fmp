var gulp = require('gulp');
var reload = require('browser-sync').reload;
var include = require('gulp-file-include');

/* ==============================================
    HTML
    Include partials to HTML files;
    Copy HTML files to destination folder
============================================== */

module.exports = function(task, config) {
    gulp.task(task, function() {
        gulp.src(['*.html', 'partials/*.html'])
            .pipe(include())
            .pipe(gulp.dest('.tmp'))
            .pipe(reload({stream:true}));
    });
};