import express from 'express'
import { UserModel } from '../../database/allModels'

const Router = express.Router();

Router.post("/signup", async (req,res)=>{
    try {
        await UserModel.findEmailAndPhone(req.body.credentials);
        const user = await UserModel.create(req.body.credentials);
        const token = user.generateJwtToken();
        const options = {
            expires : new Date(
                Date.now() + 5 * 24 * 60 * 60 * 1000
            ),
            httpOnly:true
        }
        return res.status(200).json({token, status:"Success"})
    } catch (error) {
        return res.status(500).json({ success:false,error: error.message });
    }
});
Router.post("/login",async(req,res) =>{
    try {
        const user = await UserModel.findEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        const options = {
            expires : new Date(
                Date.now() + 5 * 24 * 60 * 60 * 1000
            ),
            httpOnly:true
        }
        return res.status(200).json({token,status:"Success"});
    } catch (error) {
       return res.status(500).json({error:error.message})
    }
})

export default Router;
