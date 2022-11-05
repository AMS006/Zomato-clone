import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String, required:true},
        price:{type:Number,required:true},
        category:{type:String,required:true},
        isVeg:{type:Boolean,required:true},
        isContainEgg:{type:Boolean,required:true},
        rating:{type:String},
        photos:{
            type: mongoose.Types.ObjectId,
            ref:"images"
        },
        addOns:[{
            type:mongoose.Types.ObjectId,
            ref:"foods"
            }
        ]

    },

    {
        timestamps:true
    }
)
export const  FoodModel  = mongoose.model("foods",FoodSchema)