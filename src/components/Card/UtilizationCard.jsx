import React from 'react'
import Card from '.'
import { PieChart } from '@mui/x-charts'

function UtilizationCard() {
    const data = [
        { value: 8, label: 'In Use', color:'#0081AF' },
        { value: 10, label: 'Available', color:'green' },
        { value: 2, label: 'Out of service', color:'gray' }
      ];
  return (
    <Card>
    <div className='flex flex-col space-y-4'>
    <div className='p-2'>
            <p className='uppercase text-lg font-bold'>Station Utilization</p>
        </div>
        <div className=' h-[210px] flex items-center justify-center'>
        <PieChart
         slotProps={{
            legend: { hidden: false, position:{top:0}, labelStyle:{fontSize:'12px', fontFamily:'sans-serif'}},
            
          }}
        series={[
            {
            data: data,
            innerRadius: 100,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 360,
            cx: 140,
            cy: 100,
            }
        ]}
        />
        </div>
    </div>
    </Card>
  )
}

export default UtilizationCard