import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv';

dotenv.config();
const UserSchema = new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String},
        phone:{type:Number},
        address:{type:String},
    }
);
UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user:this._id.toString()},process.env.SECRET_KEY);
}

UserSchema.statics.findEmailAndPassword = async ({email,password}) =>{
    const user = await UserModel.findOne({email})
    if(!user) throw new Error("User Does not exists");

    const isPasswordCorrect = await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect) throw new Error("Invalid Credentials");

    return user;
}
UserSchema.statics.findEmailAndPhone = async ({email,phone}) => {
    console.log(email,phone);
    const checkUserEmail = await UserModel.findOne({email});

    if(checkUserEmail)
       throw new Error("User Already Exists");
    
    return false;
}
UserSchema.pre("save", function(next){
    const user = this;

    if(!user.isModified("password")) return next();

    bcrypt.genSalt(8,(error,salt) =>{
        if(error) return next(error);

        bcrypt.hash(user.password, salt, (error,hash) =>{
            if(error) return next(error);

            user.password = hash;
            return next();
        })

    })
})
export const UserModel = mongoose.model("users",UserSchema)