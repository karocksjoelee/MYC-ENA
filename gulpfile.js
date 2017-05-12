const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('default', ['serve','jshint', 'nodemon', 'watch-front-end','watch-back-end']);

gulp.task('jshint', () => {
    return gulp.src(['routes/**/*.js', 'middleware.js', 'bin/www'])
        .pipe(jshint({
            esnext: true
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch-front-end', function () {

    gulp.watch(['dist/*.html', 'dist/*.js']).on('change', browserSync.reload);

});

gulp.task('watch-back-end', () => {

    gulp.watch(['routes/**/*.js', 'server.js', 'bin/www', 'gulpfile.js']).on('change', () => {
        console.log('[SERVER] File Changed');
    });

});

gulp.task('nodemon',() => {
   nodemon({
       script: './bin/www',
       env: {'NODE_ENV':'development'},
       ignore: ['src']
   }).on('restart',() => {
       console.log('[SERVER] Restarted ');
   });
});

gulp.task('serve', () => {
    browserSync.init({
        proxy: {
            target: 'localhost:7500',
            ws: true
        }
    });
});