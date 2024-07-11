import React from 'react'
import Card from '.'
import { HiDotsVertical } from 'react-icons/hi'
import { consumptionInfo } from '../../data'
import { HiArrowDownCircle } from 'react-icons/hi2'

function ConsumedCard({title}) {
  return (
    <Card>
    <div className='flex flex-col space-y-4 h-[130px]'>
    <div className='flex justify-between'>
     <p className='uppercase text-sm text-gray-400 font-semibold'>{title}</p>
     <HiDotsVertical className='cursor-pointer text-2xl'/>
     </div>
     <div className='flex flex-col items-center justify-center'>
       <p className='font-bold text-3xl'>{consumptionInfo.consumedKwh}</p>
       <p>kW</p>
     </div>
     <div>
        <p><HiArrowDownCircle className='text-red-700 inline-block'/><span className='text-red-500 font-semibold'>{consumptionInfo.percentageUsageChange}%</span> from last month</p>
        
     </div>
    </div>
    </Card>
  )
}

export default ConsumedCard