import axios from 'axios'
import foodReducer from '../foods/food.reducer';
import {GET_CART,ADD_TO_CART,DELETE_FROM_CART,INCREMENT_QUANTITY,DECREMENT_QUANTITY} from './cart.type'
import { useDispatch } from 'react-redux';
export const getCart = () => (dispatch) =>{
    try {
        const cartData = {cart:[]}
        if(localStorage.zomatoCartItems){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCartItems"));
            cartData.cart = cart
        }
        return dispatch({type:GET_CART, payload:cartData.cart})
    } catch (error) {
        dispatch({type:"ERROR", payload:error})
    }
}
export const increment = (id) =>(dispatch) =>{
    try {
        console.log(id)
        const cartData = {cart:[]}
        if(localStorage.zomatoCartItems){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCartItems"));
            cartData.cart = cart
        }
        cartData.cart = cartData.cart.map((food) =>(
            food._id === id?
            {
                ...food, 
                totalPrice: food.price * (food.quantity+1),
                quantity: (food.quantity+1)
            }:food)
        );
        localStorage.setItem("zomatoCartItems", JSON.stringify({cart:cartData.cart}))
        return dispatch({type:DELETE_FROM_CART, payload:cartData.cart})
    } catch (error) {
        dispatch({type:"ERROR", payload:error})
    }
}
export const addToCart = (data) => (dispatch) =>{
    try {
        const cartData = {cart:[]}
        if(localStorage.zomatoCartItems){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCartItems"))
            cartData.cart = cart
        }
        let add = true
        for(let i in cartData.cart){
            if(cartData.cart[i]._id === data._id){
                alert("Item already added in cart")
                add=false
            }
        }
        if(add)
        cartData.cart.push(data);
        localStorage.setItem("zomatoCartItems", JSON.stringify({cart:cartData.cart}));
        return dispatch({type:ADD_TO_CART, payload:cartData.cart})
    } catch (error) {
        dispatch({type:"ERROR", payload:error})
    }
}
export const deleteFromCart = (id) =>(dispatch) =>{
    try {
        const cartData = {cart:[]}
        if(localStorage.zomatoCartItems){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCartItems"));
            cartData.cart = cart
        }
        if(cartData.cart.length ===0){
            dispatch({type:"ERROR", payload:"Unable to delete the item"})
        }
        cartData.cart = cartData.cart.filter(({_id}) => id !== _id)
        localStorage.setItem("zomatoCartItems", JSON.stringify({cart:cartData.cart}))
        return dispatch({type:DELETE_FROM_CART, payload:cartData.cart})
    } catch (error) {
        dispatch({type:"ERROR", payload:error})
    }
}

export const decrement = (id) => (dispatch) =>{
    try {
        const cartData = {cart:[]}
        if(localStorage.zomatoCartItems){
            const {cart} = JSON.parse(localStorage.getItem("zomatoCartItems"));
            cartData.cart = cart
        }
        cartData.cart = cartData.cart.map((food) =>(
            food._id === id?
            {
                ...food, 
                totalPrice: food.price * (food.quantity-1),
                quantity: (food.quantity-1)
            }:food)
        );
        localStorage.setItem("zomatoCartItems", JSON.stringify({cart:cartData.cart}))
        return dispatch({type:DELETE_FROM_CART, payload:cartData.cart})
    } catch (error) {
        dispatch({type:"ERROR", payload:error})
    }
}