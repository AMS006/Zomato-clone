import React from 'react'
import { Outlet, useLocation , useParams, Navigate} from 'react-router-dom'
import RestrauntPageLayout from '../layouts/Restraunt.layout'
function Restraunt() {
  const {pathname} = useLocation();
  const {id} = useParams();
  if(`/restraunt/${id}` === pathname){
    // console.log(pathName);
   return <Navigate to={`/restraunt/${id}/overview`} />
  }
  // console.log(pathName, id);
  return (
    <div>
      <Outlet></Outlet>
    </div>

  )
}

export default RestrauntPageLayout(Restraunt)
