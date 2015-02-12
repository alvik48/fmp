var gulp = require('gulp');
var reload = require('browser-sync').reload;
var sprite = require('gulp.spritesmith');

/* ==============================================
    Sprite
    Generate sprite from source folder images;
    Generate sprite stylesheet;
============================================== */

module.exports = function(task, config) {
    var ext;
    var varMap;

    switch (config.css) {
        case 'stylus': ext = 'styl'; varMap = iconVarMap; break;
        case 'scss':   ext = 'scss'; varMap = iconVarMap; break;
        case 'less':   ext = 'less'; varMap = iconVarMap; break;
        default:       ext = 'css';  break;
    }

    gulp.task(task, function() {
        var spriteData = gulp.src('images/sprite/*.*')
            .pipe(sprite({
                imgName: 'elements.png',
                cssName: 'sprite.' + ext,
                imgPath: './../images/elements.png',
                padding: 5,
                cssVarMap: varMap
            }));

        spriteData.img
            .pipe(gulp.dest('images'));

        spriteData.css
            .pipe(gulp.dest('styles/includes'))
            .pipe(reload({stream:true}));
    });

    function iconVarMap(sprite) {
        sprite.name = 'icon-' + sprite.name
    }
};