var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('html', function(){
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'));
});