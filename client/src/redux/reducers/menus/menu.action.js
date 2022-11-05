import axios from "axios";

import { GET_MENUS } from "./menu.type";

export const getMenus = (_id) => async(dispatch) =>{
    try {
        const menus = await axios({
            method:"GET",
            url:`http://localhost:8081/menu/list/${_id}`
        })
        console.log(menus);
        return dispatch({type:GET_MENUS, payload:menus.data.menu})
    } catch (error) {
        return dispatch({type:"Error",payload:error})
    }

}