import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
function FilterTab() {
    const [filters,setFilters] = useState(["Non Veg", "Pure Veg", "Rating 4.0+", "Timing"])
  return (
    <div className='sticky top-0 z-20 bg-white lg:py-6 pt-3 overflow-auto removeScroll px-4 lg:px-20 flex  items-center'>
      <div className='flex  gap-2 text-gray-400 font-semibold font-sans'>
        <div>
            <button className='py-2  border rounded w-24'>
                <TuneIcon fontSize='small'></TuneIcon>
                Filters
            </button>
        </div>
        {filters.map((filter,index) =>(
            
            <div key={index}>
                <button className='py-2  border rounded lg:w-28 lg:text-lg text-sm  w-24'>{filter}</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FilterTab
