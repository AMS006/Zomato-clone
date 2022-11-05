import express from 'express';
import AWS from 'aws-sdk'
import multer from 'multer'
import { ImageModel } from '../../database/Images';
import {s3Upload} from '../../utils/s3';

const Router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage});

// Getting the details of image
Router.get("/:_id", async(req,res) =>{
    try {
        const image = await ImageModel.findById(req.params._id)
        return res.json({image});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

// Uploading image to s3 Bucket
Router.post("/", upload.array('files',10), async(req,res)=>{
    try {
        const file = req.files;
        let uploadedImage = [];
        for(let i = 0;i<file.length;i++){
            const bucketOptions = {
                Bucket : "zomato-clone-006",
                Key: file[i].originalname,
                Body: file[i].buffer,
                ContentType: file[i].mimetype,
                ACL: "public-read"
            }
            uploadedImage[i] = await s3Upload(bucketOptions);
    }
        const array  = uploadedImage.map((image) => {
            return {src:image.Location}
        });
        const uploadImageToDb = await ImageModel.create({
            images: array
        })
        return res.status(200).json({uploadedImage});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})


export default Router;
