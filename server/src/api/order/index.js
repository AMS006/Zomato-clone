import express from 'express';
import { OrdersModel } from "../../database/Orders";
import passport from "passport";
const Router = express.Router();

Router.get("/",passport.authenticate("jwt",{session:false}), async(req,res) =>{
    try{
    const user = req.user;

    if(!user)
        return res.status(400).json({message:"Unable the to get the order Details plzz login"})
    
    const orders = OrdersModel.findOne({user: user._id});

    return res.status(200).json({orders});
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})
// Adding the new order of user
Router.put("/",passport.authenticate("jwt",{session:false}), async(req,res) =>{
    try{
    const user = req.user;
    const orderDetails = req.body;
    const order = OrdersModel.findOneAndUpdate(
        {
            user:user._id
        },
        { $push:
            {
                orderDetails:orderDetails
            }
        },
        {
            new:true
        }
    )
    return res.status(200).json({message:"order Updated", order});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
})
Router.delete("/",passport.authenticate({session:false}), async(req,res) =>{
    try {
        const user = req.user;
        const order = await OrdersModel.findOneAndDelete({user:user._id})
    } catch (error) {
        return res.status(500).json({success:false, message:error})
    }
})
export default Router;