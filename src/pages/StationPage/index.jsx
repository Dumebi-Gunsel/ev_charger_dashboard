import React, { useState } from 'react'
import StationsList from './components/StationsList'
import StationsMap from '../../components/Map'
import StationDetailDrawer from './components/StationDetailDrawer'

function Stations() {
  const [open , setOpen] = useState(false)
  return (
    <div className='w-full flex h-full transition-all duration-500 relative '>
        <StationsList open={open} setOpen={setOpen}/>
        <div className='flex-1 relative'>
            <StationsMap/>
           <StationDetailDrawer setOpen={setOpen} open={open}/>
        </div>
       
    </div>
  )
}

export default Stations