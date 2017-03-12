var gulp = require('../node_modules/gulp');
var exec = require('child_process').exec;


gulp.task('session', function(){
  exec('node ejemplo-session.js');
});

gulp.task('counter', function(){
  exec('node cookie-session-counter.js');
});

