import React from 'react'
import Card from '.'
import { HiDotsVertical } from 'react-icons/hi'

function MediumCard({data, title}) {
  return (
    <Card>
    <div className='flex flex-col space-y-5 h-[130px]'>
     <div className='flex justify-between'>
         <p className='uppercase text-sm text-gray-400 font-semibold'>{title}</p>
         <HiDotsVertical className='cursor-pointer text-2xl'/>
     </div>
     <div className='flex justify-center space-x-20'>
         {
             data.map((itm, _idx)=>{
                 return <div className='flex flex-col items-center justify-center'>
                     <p className='font-bold text-3xl'>{itm.amount}</p>
                     <p className='text-sm font-medium'>{itm.title}</p>
                 </div>
             })
         }
     </div>
     </div> 
 </Card>
  )
}

export default MediumCard