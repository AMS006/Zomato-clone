import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"users"
        },
        orderDetails:[
            {
                food:[
                    {
                        details:{type:mongoose.Types.ObjectId , ref:"foods"},
                        quantity:{type:Number, required:true},
                    }
                ],
                paymentMode:{type:String, required:true},
                OrderStatus:{type:String,required:true},
                paymentDetails:{
                    totalItems:{type:Number,required:true},
                    tax:{type:Number,required:true},
                    promo:{type:Number,required:true},
                    razorpayId:{type:String, required:true},
                }
            }
        ]
    },
    {timestamps:true}
)
export const OrdersModel = mongoose.model("orders",OrderSchema);