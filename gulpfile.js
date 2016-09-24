var gulp = require("gulp");
var LiveServer = require("gulp-live-server");
var browserSync = require("browser-sync");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");


gulp.task("bundle-class", function(){
  return browserify({
    entries: "app/components/class/class.jsx",
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('class.js'))
  .pipe(gulp.dest(".tmp"));
})

gulp.task("bundle-login", function(){
  return browserify({
    entries: "app/components/login/login.jsx",
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('login.js'))
  .pipe(gulp.dest(".tmp"));
})

gulp.task("bundle-profile", function(){
  return browserify({
    entries: "app/components/profile/profile.jsx",
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('profile.js'))
  .pipe(gulp.dest(".tmp"));
})

gulp.task("live-server", function(){
  var server = new LiveServer("server/main.js");
  server.start();
})
gulp.task("serve", ['bundle-class','bundle-login','bundle-profile','live-server'], function(){
    // browserSync.init(null,{
    //   proxy: "http://localhost:7777",
    //   port: 9001
    // })
})
