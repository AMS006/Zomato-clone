import mongoose from "mongoose";
import express from "express";
import { FoodModel } from "../../database/allModels";
const Router = express.Router();

Router.post("/addfood", async(req,res) =>{
    try {
        const food = req.body;
        if(!food) throw new Error("Unable to add the food");

        await FoodModel.create(food);
        return res.status(200).json({success:true,food})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
})
//Getting the food based on the id of food
Router.get("/:_id",async (req,res)=>{
    try{
        const {_id} = req.params;
        
        const food = await FoodModel.findById(_id);
        // if(!food) return res.status(404).json({success:false, message:"Food not found"});
        return res.status(201).json({success:true,food});
    }catch(error){
        return res.status(500).json({status:false,message:error.message});
    }
})

//Getting the food based of particular restraunt 
Router.get("/restraunt/_id", async(req,res) =>{
    try {
        const {_id} = req.params;
        const food = FoodModel.find({restraunt:_id});
        return res.status(201).json({food})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
})

// Getting the food based on particular category
Router.get("/category/:cate" , async(req,res) =>{
    try {
        const {cate} = req.params
        const food =await FoodModel.find({category:cate});

        return res.status(200).json({food})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
})
export default Router;