"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_js_1 = require("./server/server.js");
const orders_router_1 = require("./orders/orders.router");
const server = new server_js_1.Server();
server.bootstrap([orders_router_1.ordersRouter]).then(() => {
    console.log('Server is listening on:', server.application.address());
}).catch((error) => {
    console.log('Server failed to start');
    console.log(error);
    process.exit(1);
});
