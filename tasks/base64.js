var gulp = require('gulp');
var reload = require('browser-sync').reload;
var sprite = require('css-sprite').stream;

/* ==============================================
    Base64
    Task for generating inline images in css
============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.images + config.images.plugins.base64.src + "/**/*.*";
    var style = config.images.plugins.base64.file;
    var processor = config.images.plugins.base64.processor;
    var dest = config.paths.src.styles + config.images.plugins.base64.path;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(sprite({
                base64: true,
                style: style,
                processor: processor
            }))
            .pipe(gulp.dest(dest))
            .pipe(reload({stream:true}));
    });
};