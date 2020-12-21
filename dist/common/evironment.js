"use strict";
// export const environment = {
//     server: {port: process.env.SERVER_PORT || 3002},
//     db: {url: process.env.DB_URL || 'mongodb://localhost:27017/order-api?authSource=root',
//     options:{user:'root', password:'uFmVY4qzIU',useNewUrlParser: true}},
//     security:{saltRounds: process.env.SALT_ROUNDS || 10,
//     apiSecret: process.env.API_SECRET || 'secretKet'}    
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3002 },
    db: { url: process.env.DB_URL || 'mongodb://localhost:27017/order-api',
        options: { useNewUrlParser: true } },
    security: { saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || 'secretKet' }
};
