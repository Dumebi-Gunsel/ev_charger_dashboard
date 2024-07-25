import { LineChart } from '@mui/x-charts'
import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { HiArrowUpCircle } from 'react-icons/hi2'
import { incomeInfo } from '../../data'
import Card from '.'

function IncomeCard({ title}) {
  return (
    <div className='col-span-2'>
    <Card>
        <div className='flex flex-col space-y-4 h-[130px]'>
            <div className='flex justify-between'>
                <p className='uppercase text-sm text-gray-400 font-semibold'>{title}</p>
                <HiDotsVertical className='cursor-pointer text-2xl'/>
            </div> 
          <div className='flex justify-between gap-x-10'>
            <div className='flex flex-col space-y-2'>
              <div className='flex flex-col justify-center items-center space-y-2'>
               <p className='font-bold text-3xl'>${incomeInfo.earned}</p> 
               <p>Earned</p>
               
            </div> 
            <div>
             <p><HiArrowUpCircle className='text-blue-700 inline-block'/><span className='text-blue-500 font-semibold'>{incomeInfo.percentageUsageChange}%</span> from last month</p>
    
            </div> 
            </div>  
            <div className='flex-1'>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10], position:"bottom" }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      color: '#0081AF',
                    },
                  ]}
                  margin={{left:0,right:0,top:0,bottom:0,}}
                  grid={{horizontal: true }}
                  className='w-[10%] h-[60%]'
                  sx={{
                    '& .MuiLineElement-root':{
                        strokeWidth: 10,
                    }
                  }}
                />
                </div> 
        </div> 
        </div>

    </Card>

</div>
  )
}

export default IncomeCard