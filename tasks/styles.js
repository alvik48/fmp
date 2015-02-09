var gulp = require('gulp');
var reload = require('browser-sync').reload;
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.styles + '/' + config.styles.src.original;
    var autoprefixrOpts = config.styles.plugins.autoprefixr;
    var dest = config.paths.temp.styles;

    if (config.styles.src.processor === 'stylus') {
        gulp.task(task, function() {
            gulp.src(src)
                .pipe(stylus())
                .pipe(autoprefixer(autoprefixrOpts))
                .pipe(gulp.dest(dest))
                .pipe(reload({stream:true}));
        });
    }
};