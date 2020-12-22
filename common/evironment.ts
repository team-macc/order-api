// export const environment = {
//     server: {port: process.env.SERVER_PORT || 3002},
//     db: {url: process.env.DB_URL || 'mongodb://localhost:27017/order-api',
//     options:{useNewUrlParser: true}},
//     security:{saltRounds: process.env.SALT_ROUNDS || 10,
//     apiSecret: process.env.API_SECRET || 'secretKet'}    
// }

export const environment = {
    server: { port: process.env.SERVER_PORT || 3001 },
    db: {
        url: process.env.DB_URL || 'mongodb://root:QPExkcCW0W@cluster-1-mongodb/?retryWrites=true&w=majority'},
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || 'secretKet'
    }
}