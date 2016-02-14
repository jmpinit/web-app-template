"use strict";

let WebSocketServer = require('ws').Server;
let wss;

let start = function() {
    wss = new WebSocketServer({ port: 3000 });
};

let reload = function() {
    wss.clients.forEach((client) => {
        client.send("reload");
    });
};

module.exports = { start, reload };