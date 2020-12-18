import * as restify from 'restify';
import {Order} from './orders.model'
import {ModelRouter} from '../common/model-router'
import { NotFoundError } from 'restify-errors';
import {authorize} from '../security/authz.handler'


class OrdersRouter extends ModelRouter<Order>{
    constructor(){
        super(Order)
    }

    findItems = (req, resp, next)=>{
        Order.findById(req.params.id, "+items").then(
            order=>{
                if(!order){
                    throw new NotFoundError('Order not Found')
                }else{
                    resp.json(order.items)
                    return next()
                }
            }
        ).catch(next)
    }

    replaceItems = (req, resp, next)=>{
        Order.findById(req.params.id).then(
            order=>{
                if(!order){
                    throw new NotFoundError('Order not Found')
                }else{
                    order.items = req.body
                    return order.save()
                }
            }
        ).then(order=>{
            resp.json(order.items)
            return next()
        }).catch(next)
    }


      findByEmail = (req, resp, next)=>{        
        if(req.query.email){
          Order.findByEmail(req.query.email)
              .then(user => user ? [user] : [])
              .then(this.renderAll(resp,next))
              .catch(next)              
        }else{
          next()
        }
      }

    applyRoutes(application: restify.Server) {
        console.log('****************ORDER ROUTERS****************')        
        application.get('/orders',[authorize,this.findByEmail, this.findAll])
        application.get('/orders/:id', [authorize,this.validateId, this.findById])
        application.post('/orders',[authorize,this.save])
        application.put('/orders/:id', [authorize,this.validateId,this.replace])
        application.patch('/orders/:id', [authorize,this.validateId,this.update])
        application.del('/orders/:id', [authorize,this.validateId,this.delete])
        application.get('/orders/:id/items', [authorize,this.validateId,this.findItems])
        application.put('/orders/:id/items', [authorize,this.validateId, this.replaceItems])
    }
}

export const ordersRouter = new OrdersRouter()