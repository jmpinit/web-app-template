"use strict";

let path = require("path");
let gulp = require("gulp");
let sourcemaps = require("gulp-sourcemaps");
let babel = require("gulp-babel");
let concat = require("gulp-concat");
let tap = require("gulp-tap");
let watch = require("gulp-watch");

let server = require("./server");
let reloader = require("./reloader");

gulp.task("init", function() {
    reloader.start();
    server.serve();
});

gulp.task("default", ["init"], function () {
    watch('src/**/*.js', function () {
        reloader.reload();

        return gulp.src("src/**/*.js")
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("public/scripts/dist"));
    });
});