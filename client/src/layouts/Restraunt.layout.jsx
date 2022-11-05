import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ButtonsTab from "../components/Restraunt/ButtonsTab";
import ImageGrid from "../components/Restraunt/ImageGrid";
import RestrauntInfo from "../components/Restraunt/RestrauntInfo";
import Tabs from "../components/Restraunt/Tabs";
import CartContainer from "../components/Cart/CartContainer";
//Redux
import {useDispatch} from 'react-redux'
import {getRestaurant} from '../redux/reducers/restaurant/restaurant.action'
import ImageGridSkeleton from "../components/Skeleton/ImageGrid";
import InfoTabSkeleton from "../components/Skeleton/infoTab";
const RestrauntPageLayout = (Component) => {
    return function RestrauntPageLayout(props) {
    const data = useParams();
    const dispatch = useDispatch()
    const [restaurant,setRestaurant] = useState();
    useEffect(() =>{
            dispatch(getRestaurant(data.id)).then((data) =>{
                const restaurantData = data.payload
                setRestaurant((prev) => ({...prev,...restaurantData}))
            })
        },[])
    return (
        <>
           <Navbar></Navbar>
           <div>
                <div className=" px-3 lg:px-24 mt-3">
                    {restaurant? <ImageGrid restaurantImagesId = {restaurant.RestrauntImages} />: <ImageGridSkeleton />}
                    {restaurant ?<RestrauntInfo restraunt={restaurant}/> :<InfoTabSkeleton />}
                    <ButtonsTab />
                    <Tabs></Tabs>
                    {restaurant && <Component {...props}></Component>}
                </div>
                <CartContainer />
            </div>
        </>
    )
}
}

export default RestrauntPageLayout