import express from 'express';
import { MenuModel } from '../../database/allModels';
import { ImageModel } from '../../database/allModels';
const Router = express.Router();

//Getting the menu list based on id of menu
Router.post('/', async(req,res) =>{
    try {
        const menu = req.body;
        if(!menu){
            return res.status(403).json({success:false, message:"Unable to add empty menu"})
        }
        await MenuModel.create(menu);
        console.log(req.body)
        return res.status(200).json({menu});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
})
Router.get('/list/:_id' , async(req,res) =>{
    try {
        const {_id} = req.params;
        const menu = await MenuModel.findById(_id);

        if(!menu) return res.status(404).json({success:false, message:"No menu found"});

        return res.status(200).json({ menu});

    } catch (error) {
        return res.status(500).json({success:false, message: error});
    }
})

//getting the images of menu
Router.get("/images/:_id", async(req,res) =>{
    try{
    const {_id} = req.params;

    const images = await ImageModel.findById(_id);

    return res.status(201).json({success:true, images});
    }
    catch{
        return res.status(500).json({success:false, message: message.error});
    }
})

export default Router