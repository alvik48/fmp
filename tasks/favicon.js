var gulp = require('gulp');
var reload = require('browser-sync').reload;

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.html + '/*.png';
    var dest = config.paths.temp.html;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(gulp.dest(dest))
            .pipe(reload({stream:true}));
    });
};