import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FootTab";
//Redux
import { useDispatch } from "react-redux";
import { getRestaurants } from "../redux/reducers/restaurant/restaurant.action";

const HomePageLayout = (Component) => {
    return function HomePageLayout(props){
    const dispatch = useDispatch();
   const [restaurant,setRestaurant] = useState()
   useEffect(() =>{
    dispatch(getRestaurants()).then((data) =>{
        setRestaurant({...data.payload});
    });
   },[])
   console.log(restaurant)
    return(
        <>
            <Navbar></Navbar>
            <div>
                <FoodTab></FoodTab>
                <div>
                    <Component {...props}></Component>
                </div>
            </div>
        </>

)}}
export default HomePageLayout;