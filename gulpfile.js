var gulp = require('gulp');
var jsonServer = require("gulp-json-srv");
var bs = require("browser-sync").create();
var server = jsonServer.create();

gulp.task("server", function(){
   return gulp.src("data/db.json").pipe(server.pipe());
});

gulp.task('watch', [], function() {
  bs.init({
    server: true,
    port: 3010
  });
});

gulp.task('default', ['server','watch']);