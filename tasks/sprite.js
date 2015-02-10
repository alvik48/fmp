var gulp = require('gulp');
var reload = require('browser-sync').reload;
var sprite = require('gulp.spritesmith');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var src = config.paths.src.images + config.images.plugins.sprite.src + "/**/*.*";
    var spriteDest = config.paths.src.images;

    var styleName = config.images.plugins.sprite.styleName;
    var spriteName = config.images.plugins.sprite.spriteName;

    var styleDest = config.paths.src.styles + config.images.plugins.sprite.path;
    var relPath = config.images.plugins.sprite.cssPath;

    gulp.task(task, function() {
        var spriteData = gulp.src(src)
            .pipe(sprite({
                imgName: spriteName,
                cssName: styleName,
                imgPath: relPath,
                padding: 5,
                cssVarMap: function(sprite) {
                    sprite.name = 'icon-' + sprite.name
                }
            }));

        spriteData.img
            .pipe(gulp.dest(spriteDest));

        spriteData.css
            .pipe(gulp.dest(styleDest))
            .pipe(reload({stream:true}));
    });
};