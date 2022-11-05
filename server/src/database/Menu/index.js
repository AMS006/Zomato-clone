import mongoose from "mongoose";

const MenuSchema =new mongoose.Schema(
    {
        menu:[
            {
                name:{type:String},
                items:[
                    {
                        type:mongoose.Types.ObjectId,
                        ref:"foods",
                        unique:false
                    }
                ],
            }
        ]
    },
    {timestamps:true}
)
export const MenuModel = mongoose.model("menus",MenuSchema);

// "menu":[
//     {
//         "name":"Recomended",
//         "items":[
//             "636540d56bc54a8327a053e0",
//             "636541a36bc54a8327a053e5",
//             "636542316bc54a8327a053ea",
//             "635532eed8e3db4ce799f90a",
//             "6365436a6bc54a8327a053f4" 
//         ]
//     },
//     {
//         "name":"Cheese Burgers",
//         "items":[
//             "636544576bc54a8327a053f9",
//             "636544e96bc54a8327a053fe",
//             "636545826bc54a8327a05403"
//         ]
//     }
// ]