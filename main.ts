import {Server} from './server/server.js'
import {ordersRouter} from './orders/orders.router'

const server = new Server()
server.bootstrap([ordersRouter]).then(()=>{
    console.log('Server is listening on:', server.application.address())
}).catch((error)=>{
    console.log('Server failed to start')
    console.log(error)
    process.exit(1)
})