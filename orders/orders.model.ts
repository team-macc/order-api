import * as mongoose from 'mongoose'

export interface OrderItem extends mongoose.Document{
    description: string,
    quantity: number,
    price: number,
    idProduto: string
}

export interface OrderModel extends mongoose.Model<Order> {
    findByEmail(email: string): Promise<Order>
  }

export interface Order extends mongoose.Document{
    userEmail: string,
    items: OrderItem[],
    date: Date,
    status: string,
    cep: string,
    address: string,
    instructions: string
}

const orderItemSchema = new mongoose.Schema(
    {
        description:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        idProduto: {
            type: String,
            required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        userEmail:{
            type: String,
            required: true
        },
        items: {
            type: [orderItemSchema],
            required: false,
            select: true,
            default: []
        },
        date:{
            type: Date,
            required: true
        },
        status:{
            type: String,
            enum: ['Done','Waiting','Send'],
            require:true,
            default:'Waiting'
        },
        cep:{
            type: String
        },
        address:{
            type: String
        },
        instructions: {
            type: String
        }
    }
)

orderSchema.statics.findByEmail = function(userEmail: string){
    return this.findOne({userEmail}) //{email: email}
  }

export const Order = mongoose.model<Order, OrderModel>('Order', orderSchema)