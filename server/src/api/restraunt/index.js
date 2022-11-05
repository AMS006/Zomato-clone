import express from 'express';
import { RestrauntModel } from '../../database/allModels';

const Router = express.Router();

//For Adding the restraunt
Router.post("/",async (req,res) =>{
    try {
        const  restaurant  = req.body.restaurant;
        // if(!restraunt) return res.status(500).json({success:false,message:"Invalid Input"});
        await RestrauntModel.create(restaurant);

        return res.status(200).json({succes:true, restaurant});

    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
})
//Getting the Restraunt based on city
Router.get("/",async(req,res) =>{
    try{
    // const city = req.query;
    const restaurant = await RestrauntModel.find({})
    return res.status(200).json({success:true,restaurant})
    }catch(error){
        return res.status(500).json({success:false,message:message.error});
    }
});
//Getting the Restraunt based on id
Router.get("/:_id",async(req,res) =>{
    try {
        const {_id} = req.params;
        const restaurant = await RestrauntModel.findById(_id);
        return res.status(200).json({success:true, restaurant});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
});

//Getting the Restraunt based on search String
Router.get("/search/:data", async(req,res) =>{
    try {
        const {data} = req.params;
        const restaurant = await RestrauntModel.find({name:{$regex: data, $options:"i"}});
        return res.status(200).json({success:true, restaurant});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
})

//Getting the similar Restraunt
Router.get("/similar/restaurant/:_id",async(req,res) =>{
    try {
        const {_id} = req.params
        const restaurant = await RestrauntModel.findById(_id);
        const cuisines = restaurant.cuisine;
        console.log(cuisines);
        const similarRestaurant = await RestrauntModel.find({cuisine:{$in:cuisines}});

        if(!similarRestaurant)
            return res.status(404).json({"message":"No Restraunt Found"});
        return res.status(200).json({similarRestaurant});
    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error"})
    }
})
export default Router
