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
        gulp.watch('fonts/**/*.*', ['fonts']);
        gulp.watch('styles/**/*.*', ['styles']);
        gulp.watch('images/sprite/*.*', ['sprite']);
        gulp.watch(['images/**/*.*', '!images/sprite/*.*'], ['images']);
        gulp.watch('js/**/*.*', ['js']);
        gulp.watch(['*.html', 'partials/**/*.html'], ['html']);
        gulp.watch(['*.png', '*.ico'], ['favicon']);
    });
};