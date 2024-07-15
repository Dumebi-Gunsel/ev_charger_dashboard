import React from 'react'
import Card from '.'
import { HiDotsVertical } from 'react-icons/hi'

function MediumCard({data, title, apidata}) {
    
  return (
    <Card>
    <div className='flex flex-col space-y-5 h-[130px]'>
     <div className='flex justify-between'>
         <p className='uppercase text-sm text-gray-400 font-semibold'>{title}</p>
         <HiDotsVertical className='cursor-pointer text-2xl'/>
     </div>
     <div className='flex justify-center space-x-20'>
     <div className='flex flex-col items-center justify-center'>
        <p className='font-bold text-3xl'>{apidata?.length?? data[0].amount}</p>
        <p className='text-sm font-medium'>{data[0].title}</p>
     </div>
     <div className='flex flex-col items-center justify-center'>
        <p className='font-bold text-3xl'>{(apidata&&(apidata?.length * 2)) ?? data[1].amount}</p>
        <p className='text-sm font-medium'>{data[1].title}</p>
     </div>
     </div>
     </div> 
 </Card>
  )
}

export default MediumCard