var gulp = require('gulp');
var _if = require('gulp-if');
var reload = require('browser-sync').reload;
var sprite = require('css-sprite').stream;

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.images + config.images.plugins.sprite.src + "/**/*.*";
    var spriteDest = config.paths.src.images;

    var styleName = config.images.plugins.sprite.styleName;
    var spriteName = config.images.plugins.sprite.spriteName;

    var processor = config.images.plugins.sprite.processor;
    var styleDest = config.paths.src.styles + config.images.plugins.sprite.path;
    var relPath = config.images.plugins.sprite.cssPath;

    gulp.task(task, function() {
        gulp.src(src)
            .pipe(sprite({
                name: spriteName,
                style: styleName,
                cssPath: relPath,
                processor: processor
            }))
            .pipe(_if('*.png', gulp.dest(spriteDest), gulp.dest(styleDest)))
            .pipe(reload({stream:true}));
    });
};