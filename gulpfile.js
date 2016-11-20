var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function() {
  return browserify({ debug: true })
    .transform(babelify)
    .require('src/app.js', { entry: true })
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('dist/app.js'));
});

gulp.watch('src/app.js', ['default']);
