import express from "express";
import dotenv from 'dotenv'
import Dbconnect from './database/connection'
import auth from './api/auth'
import food from './api/food'
import user from './api/user'
import order from './api/order'
import review from './api/review'
import restaurant from './api/restraunt'
import menu from './api/menu'
import image from './api/images'
import session from 'express-session';
import passport from "passport";
import passwordconfig from "./config";
import cors from 'cors'
const zomato = express();
const port = 8081;
dotenv.config();

passwordconfig(passport)
zomato.use(cors())
zomato.use(express.json())
zomato.use(session({ secret: process.env.SECRET_KEY}));
zomato.use(passport.initialize());
zomato.use(passport.session());


Dbconnect()
      .then(() => {
        console.log("Database Connected");
      })
      .catch((error) => {
        console.log("database connection failed...");
        console.log(error);
      });
zomato.get('/' , (req,res) =>{
    res.send("Server is Running ")
})
zomato.use('/auth', auth);
zomato.use('/food',food)
zomato.use('/restaurant', restaurant)
zomato.use('/user', user)
zomato.use("/review",review);
zomato.use('order',order);
zomato.use('/image',image);
zomato.use('/menu',menu)
zomato.listen(port, () => {
    console.log("Server is Running");
});