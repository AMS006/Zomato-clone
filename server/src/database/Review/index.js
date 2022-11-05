import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema(
    {
        food:{type:mongoose.Types.ObjectId, ref:'foods'},
        restaurant:{type:mongoose.Types.ObjectId, ref:'restraunts'},
        user:{type:mongoose.Types.ObjectId, ref:"users"},
        isFoodReview:{type:Boolean, required:true},
        isRestaurantReview:{type:Boolean,required:true},
        rating:{type:Number, required:true},
        reviewTitle:{type:String},
        reviewDescription:{type:String,required:true},
        photos:{
            type:mongoose.Types.ObjectId,
            ref:"images",
        }
    },
    {
        timestamps:true
    }
);
export const ReviewsModel = mongoose.model("reviews",ReviewsSchema);