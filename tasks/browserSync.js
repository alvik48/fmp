var gulp = require('gulp');
var browserSync = require('browser-sync');

/* ==============================================

============================================== */

module.exports = function(task, config) {

    var address = 'http://localhost:' + config.server.port + '/';

    gulp.task(task, function() {
        browserSync({
            proxy: address
        });
    });
};