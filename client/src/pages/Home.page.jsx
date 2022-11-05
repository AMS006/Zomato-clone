import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Delivery from '../components/Delivery'
import Dining from '../components/Dining'
import NightLife from '../components/NightLife'
import HomePageLayout from '../layouts/Home.layout'

function Home() {
   const {type} = useParams()
   
  return (
    <div>
      {type === 'delivery' && <Delivery />}
      {type === 'night' && <NightLife />}
      {type === 'dining' && <Dining />}
    </div>
  )
}

export default HomePageLayout(Home)
