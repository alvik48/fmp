var gulp = require('gulp');
var browserSync = require('browser-sync');

/* ==============================================
    BrowserSync
    Reload browser on source changes
============================================== */

module.exports = function(task, config) {

    var address = 'http://localhost:' + config.port + '/';

    gulp.task(task, function() {
        browserSync({
            proxy: address
        });
    });
};