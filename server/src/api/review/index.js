import { ReviewsModel } from "../../database/Review";
import express from 'express';
import passport from "passport";
const Router = express.Router();

//Getting the review based on restraunt Id
Router.get('/:resId' , async(req,res) =>{
   try{
    const {resId} = req.params;
    const reviews = await ReviewsModel.find({restaurant:resId}).sort({createdAt:-1});

    if(!reviews)
       return res.status(404).json({success:false, message:"No review Found"});
    
    return res.status(201).json({reviews});
   }catch(error){
      return res.status(500).json({message:error.messsage});
   }

});
// Adding the review by user
Router.post("/", passport.authenticate("jwt",{session:false}), async(req,res) =>{
    try{
    const {_id} = req.user;

    const data = req.body;

    const review = await ReviewsModel.create({...data, user:_id});

    return res.status(200).json({review});

    }catch(error){
        return res.status(500).json({message:error.message});
    }
})
// Deltion of the Review by Authenticated User
Router.delete("/:_id", passport.authenticate("jwt", {session:false}), async(req,res)=>{
    try {
        const user = req.user;
        const {_id} = req.params;

        const reviews = await ReviewsModel.findOneAndDelete({id:_id, user:user.id});

        if(!reviews)
            return res.status(403).json({message:"Unable to delete the review"});
        
        return res.status(201).json({success:true, message:"Review deleted"})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})
export default Router;