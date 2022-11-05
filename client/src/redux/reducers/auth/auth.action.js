import axios from "axios";
import { LOGIN,SIGN_UP,SIGN_OUT } from "./auth.type";

export const login = (userData) => async(dispatch) =>{
    try {
        const user = await axios({
            method:"POST",
            url:"http://localhost:8081/auth/login",
            data:{credentials:userData}
        });
        localStorage.setItem(
            "LoggedInUser",
            JSON.stringify({token:user.data.token})
        )
        
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${user.data.token}`;
        window.location.reload();
        return(dispatch({type:LOGIN, payload:user.data}))
    } catch (error) {
        alert("Invalid Credentials")
        dispatch({type:"ERROR", payload:error})
    }
}
export const signUp = (userData) => async(dispatch) =>{
    try {
        const user = await axios({
            method:"POST",
            url:"http://localhost:8081/auth/signup",
            data:{credentials:userData}
        });
        localStorage.setItem(
            "LoggedInUser",
            JSON.stringify({token:user.data.token})
        )
        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.data.token}`;
        window.location.reload()

        return(dispatch({type:SIGN_UP, payload:user.data}))
    } catch (error) {
        alert("Invalid Credentials")
        dispatch({type:"ERROR", payload:error})
    }
}
export const signOut = () => async(dispatch) => {
    try {
      localStorage.removeItem("LoggedInUser");
      return dispatch({type:SIGN_OUT, payload:{}})  
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}