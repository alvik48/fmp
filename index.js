'use strict';

module.exports = function(userConfig) {

    var gulp = require('gulp');
    var fs = require('fs');
    var _ = require('lodash');
    var app = require(__dirname + '/app');

    /* ==============================================
        Config
        User settings overrides defaults
    ============================================== */

    var defaultConfig = require(__dirname + '/config.json');
    var config = _.extend(defaultConfig, userConfig);

    /* ==============================================
         Register tasks
         Load all tasks from "tasks" folder
    ============================================== */

    var tasks = fs.readdirSync(__dirname + '/tasks/');

    tasks.forEach(function(task) {
        var taskname = task.split('.')[0];
        require(__dirname + '/tasks/' + taskname)(taskname, config);
    });

    /* ==============================================
        Default task
        Start tasks and add file watchers
    ============================================== */

    gulp.task('default', [
        'server',
        'browserSync',
        'fonts',
        'sprite',
        'styles',
        'js',
        'images',
        'favicon',
        'html'
    ], function () {
        gulp.watch(config.paths.src.fonts + '/**/*.*', ['fonts']);
        gulp.watch(config.paths.src.styles + '/**/*.*', ['styles']);
        gulp.watch(config.paths.src.images + config.images.plugins.sprite.src + '/*.*', ['sprite']);
        gulp.watch([
            config.paths.src.images + 'images/**/*.*',
            '!' + config.paths.src.images + config.images.plugins.sprite.src + '/*.*'
        ], ['images']);
        gulp.watch(config.paths.src.js + '/**/*.*', ['js']);
        gulp.watch(['*.html', config.html.partials + '/**/*.html'], ['html']);
        gulp.watch('*.png', ['favicon']);
    });
};