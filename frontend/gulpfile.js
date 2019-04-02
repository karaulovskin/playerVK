'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', function () {
   browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', function () {
   gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
   ]).on('change', browserSync.reload);
});

gulp.task('default', gulp.series(gulp.parallel('server', 'watch')));