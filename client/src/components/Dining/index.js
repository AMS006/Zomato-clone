import React from 'react'
import DiningCarouse from './DiningCarouse'
import FilterTab from "../../components/FilterTab";
function Dining() {
  return (
    <div>
      <h1 className='lg:px-24 px-4 text-2xl font-semibold text-gray-600 py-4'>Collections</h1>
      <DiningCarouse />
      <FilterTab></FilterTab>
    </div>
  )
}

export default Dining
