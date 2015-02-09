var gulp = require('gulp');
var reload = require('browser-sync').reload;

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = [
        config.paths.src.images + '/**/*.*',
        '!' + config.paths.src.images + '/' + config.images.plugins.base64.src + '/**/*.*',
        '!' + config.paths.src.images + '/' + config.images.plugins.sprite.src + '/**/*.*'
    ];
    var dest = config.paths.temp.images;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(gulp.dest(dest))
            .pipe(reload({stream: true}));
    });
};