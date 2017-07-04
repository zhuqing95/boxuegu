var gulp = require("gulp");
var uglify=require("gulp-uglify");
gulp.task("sjs",function () {
    gulp.src(["lala.js"]).pipe(uglify())
        .pipe(gulp.dest("myjs"))
})
gulp.task("baimao",function () {
    console.log("baimao");
})
var less=require("gulp-less");
gulp.task("less",function () {
    gulp.src(["l.less"]).pipe(uglify())
        .pipe(gulp.dest("myless"))
});