var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//==================TASKS THAT GULP CAN PERFORM=====================================

//IMAGE MIN
gulp.task('jpgs', function() {
    return gulp.src('public/images/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('public/minImages'));
});

gulp.task('pngs', function() {
    return gulp.src('public/images/*.png')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('public/minImages'));
});

//NEED DEFAULT TASK
gulp.task('default', ['express', 'watch'], function() {
  console.log("this is default");
});
