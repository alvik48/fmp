var gulp = require('gulp');
var app = require('./../app');

/* ==============================================

============================================== */

module.exports = function(task, config) {
    app.set('port', process.env.PORT || config.server.port);

    gulp.task(task, function() {
        var server = app.listen(app.get('port'), function () {
            console.log('Express server listening on port ' + server.address().port);
        });
    });
};