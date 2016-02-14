"use strict";

define(() => {
    return {
        startup: function() {
            let ws;

            let connect = function() {
                ws = new WebSocket("ws://localhost:3000");

                ws.onmessage = function(msg) {
                    if (msg.data === "reload") {
                        window.location.reload(true);
                    }
                };

                ws.onerror = function() {
                    setTimeout(function() {
                        connect();
                    }, 3000);
                };
            }

            connect();
        }
    };
});