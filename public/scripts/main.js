requirejs(["dist/hello", "dist/reloader-client"], function(hello, reloader) {
    reloader.startup();
    hello();
});