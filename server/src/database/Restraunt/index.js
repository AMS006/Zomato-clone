import mongoose from "mongoose";

const RestrauntSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        menu:{
            type:mongoose.Types.ObjectId,
            ref:"menus",
        },
        menuImages:{
            type:mongoose.Types.ObjectId,
            ref:'images',
        },
        cuisine:[
           { 
            type:'String',
            required:true
            }
        ],
        mapLocation:{type:String,required:true},
        restrauntTimings:{type:String},
        contactNumber :{type:Number},
        website:String,
        popularDishes:String,
        diningRating:String,
        deliveryRating:String,
        reviews:{
            type:mongoose.Types.ObjectId,
            ref:"reviews",
        },
        RestrauntImages:{
            type:mongoose.Types.ObjectId,
            ref:"images",
        },
        isPromo:{
            type:Boolean,
            default:false
        },
        isOff:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
);
export const RestrauntModel = mongoose.model("restraunts",RestrauntSchema)

// {
//     "restraunt":{
//         "name":"Oye Kiddan",
//         "addresss":"Worli, Mumbai",
//         "city":"Mumbai",
//         "menu":"",
//         "menuImages":"",
//         "cuisine":["North Indian", "Street Food", "Beverages", "Desserts"],
//         "mapLocation":"18.9925621590,72.8216009215",
//         "restrauntTimings":"Mon-Sun:9am – 4pm, 6pm – 12midnight",
//         "contactNumber":"",
//         "diningRating":"0",
//         "deliveryRating":"3.6",
//         "reviews":"",
//         "RestrauntImages":"",
//         "isPromo":true,
//         "isOff":false
//     }
// }