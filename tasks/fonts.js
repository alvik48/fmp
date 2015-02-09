var gulp = require('gulp');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.fonts + '/*.*';
    var dest = config.paths.temp.fonts;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(gulp.dest(dest));
    });
};