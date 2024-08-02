import { Tooltip } from '@mui/joy'
import React from 'react'
import { BiBed, BiCoffee } from 'react-icons/bi'
import { GrRestroom } from 'react-icons/gr'
import { HiShoppingBag, HiStar, HiWifi } from 'react-icons/hi2'
import { MdDinnerDining } from 'react-icons/md'

function AmmenityTag({ammenity}) {
   const ammenitiesMap = {
    wifi : <HiWifi/>,
    lodging: <BiBed/>,
    restroom: <GrRestroom/>,
    shopping: <HiShoppingBag/>,
    breakfast: <BiCoffee/>,
    dining: <MdDinnerDining/>
   }
  return <Tooltip title={ammenity.substring(0, 1).toUpperCase() + ammenity.substring(1)}>
    {<div className='text-2xl text-gray-700 mx-2'>{ammenitiesMap[ammenity]??<HiStar/>}</div> }
  </Tooltip>
}

export default AmmenityTag