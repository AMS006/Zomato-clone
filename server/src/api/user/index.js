import passport from 'passport';
import express from 'express';
import { UserModel } from '../../database/allModels';
const Router = express.Router();

Router.get("/",passport.authenticate("jwt", {session:false}),  (req,res) =>{
    try {
        const {fullName, email, address} = req.user;
        return res.status(201).json({success:true, email , fullName});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
})
// Getting the user by its id for review section
Router.get("/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const user = await UserModel.findById(_id);
        if(!user) return res.status(404).json({success:false, message:"User not found"});

        return res.status(201).json({success:true, user});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }    
})
//Updating the User data
Router.put("/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const data = req.body.credentials
        await UserModel.findEmailAndPhone({...data});
        data.password = undefined;
        const updatedUser = await UserModel.findByIdAndUpdate(_id ,{$set: data}, {new:true})
        return res.status(201).json({success:true, updatedUser})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
})
export default Router

