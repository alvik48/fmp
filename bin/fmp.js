#! /usr/bin/env node

var fs = require('fs.extra');
var path = require('path');
var exec = require('child_process').exec;

/* ==============================================
    !!!WARNING!!!

    In 1.1.* versions of module
    there is only one option to make new project:
    with stylus and backbone!

    All other options will be added in
    future releases
============================================== */

var action = process.argv[2];
var target = process.argv[3];
var css = process.argv[4];
var js = process.argv[5];

var tplPath = path.join(__dirname, '..', 'templates');

/* ==============================================
    Check that action is "new"
============================================== */

switch (action) {
    case 'new': action = 'new'; break;
    default: action = 'new';
}

/* ==============================================
    CSS preprocessor
============================================== */

switch (css) {
    case '--css': case '-c': css = 'css'; break;
    case '--stylus': case '-st': css = 'stylus'; break;
    case '--scss': case '-sc': css = 'scss'; break;
    case '--sass': case '-sa': css = 'sass'; break;
    case '--less': case '-l': css = 'less'; break;
    default: css = 'css';
}

/* ==============================================
    JS library
============================================== */

switch (js) {
    case '--vanilla': case '-v': js = 'vanilla'; break;
    case '--jquery': case '-j': js = 'jquery'; break;
    case '--backbone': case '-b': js = 'backbone'; break;
    case '--angular': case '-a': js = 'angular'; break;
    default: js = 'vanilla'; break;
}

/* ==============================================
    Start
============================================== */

console.log('New project');
console.log();
console.log('~---------------------------~');
console.log('CSS format: ' + css);
console.log('JS library: ' + js);

// All tasks to copy files to destination
var tasks = [
    { task: 'HTML',         from: 'html',          to: ''       },
    { task: 'styles',       from: 'styles/' + css, to: 'styles' },
    { task: 'JS',           from: 'js/' + js,      to: 'js'     },
    { task: 'images',       from: 'images',        to: 'images' },
    { task: 'fonts',        from: 'fonts',         to: 'fonts'  },
    { task: 'bower.json',   from: 'bower.json',    to: ''       },
    { task: 'gulpfile',     from: 'gulpfile.js',   to: ''       },
    { task: 'favicon',      from: 'favicon.png',   to: ''       },
    { task: 'package.json', from: 'package.json',  to: ''       }
];

// NPM dependencies
var npmDeps = 'gulp fmp';

// Bower dependencies (depends on js library user choice)
var bowerDeps = {
    vanilla:  '',
    jquery:   'jquery',
    angular:  'angular',
    backbone: 'underscore jquery backbone'
};

/* ==============================================
    Make directories
============================================== */

(function makeFolders() {
    console.log();
    console.log('~---------------------------~');
    console.log('Making necessary folders in ' + target);

    fs.mkdirSync(target + '/styles');
    fs.mkdirSync(target + '/js');
    fs.mkdirSync(target + '/pictures');
    fs.mkdirSync(target + '/images');
    fs.mkdirSync(target + '/fonts');

    console.log('Done!');
})();

/* ==============================================
    Copy all files to target folder
============================================== */

var taskNum = 0;
(function copy() {
    var now = tasks[taskNum];

    if (now === undefined) {
        installDeps();
        return;
    }

    var from = path.join(tplPath, now.from);
    var to = path.join(target, now.to);

    taskNum++;

    console.log();
    console.log('~---------------------------~');
    console.log('Copying ' + now.task + '...');

    copyFiles(from, to, copy);
})();

/* ==============================================
    UTILS
============================================== */

function copyFiles(from, to, cb) {
    fs.copyRecursive(from, to, function(error) {
        if (error) {
            console.log(error);
            return;
        }

        console.log('Done!');

        if (cb !== undefined) {
            cb();
        }
    });
}

/* ==============================================
    Install dependencies
============================================== */

function installDeps() {
    installNPMDependencies();
}

/* ==============================================
    Install NPM dependencies
============================================== */

function installNPMDependencies() {
    console.log();
    console.log('~---------------------------~');
    console.log('Running `npm install ' + npmDeps + '`. It can takes some time, please wait...');

    exec('npm install --save ' + npmDeps, function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            console.log();
            console.log('~---------------------------~');
            console.log('Done! All npm dependencies were successfully installed.');

            installBowerDependencies();
        }
    });
}

/* ==============================================
    Install BOWER dependencies
============================================== */

function installBowerDependencies() {
    var deps = bowerDeps[js];
    if (deps === '') {
        launchServer();
        return;
    }

    console.log();
    console.log('~---------------------------~');
    console.log('Running `bower install ' + deps + '`. It can takes some time, please wait...');

    exec('bower install --save ' + deps, function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            console.log();
            console.log('~---------------------------~');
            console.log('Done! All dependencies were successfully installed.');
            launchServer();
        }
    });
}

/* ==============================================
    Launch preview server
============================================== */

function launchServer() {
    console.log();
    console.log('~---------------------------~');
    console.log('Launching your server...');

    setTimeout(function() {
        exec('gulp', function (error) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log();
                console.log('~---------------------------~');
                console.log('DONE! Server has been launched successfully. Let\'s code!');
            }
        });
    }, 500);
}