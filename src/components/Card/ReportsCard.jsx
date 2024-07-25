import React from 'react'
import Card from '.'
import { HiCalendar, HiChevronDown, HiDotsVertical } from 'react-icons/hi'
import { HiListBullet } from 'react-icons/hi2'
import { Dropdown, LinearProgress, Menu, MenuButton, MenuItem, Table, Tooltip  } from '@mui/joy'
import { chargingSessions } from '../../data'

function ReportsCard() {
    const headers = ["ID", "Time", "Charger Type", "Station Type", "Power Consumed", "Average Power Consumed", "Cost per kW", "Session profit"]
  return (
    <div className='col-span-5'>
            <Card>
            <div className='flex justify-between items-center'>
            <div>
                <p className='uppercase text-lg font-bold'>Charging Report</p>
            </div>
            <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors duration-500'>
                    <HiCalendar className='text-2xl'/>
                    <p>Today</p>
                    <HiChevronDown/>
                </div>
                <div className='flex items-center space-x-1 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors duration-500'>
                    <HiListBullet/>
                    <p>View All</p>
                </div>
                <Dropdown>
                    <MenuButton
                        variant="plain">
                        <HiDotsVertical className=' cursor-pointer text-2xl'/>
                    </MenuButton>
                    <Menu
                        variant="plain">
                        <MenuItem>Newest</MenuItem>
                        <MenuItem>Oldest</MenuItem>
                    </Menu>
                </Dropdown>
                     
            </div>
        </div>
        <div className='w-full mt-5 overflow-y-auto h-[230px]'>
            <Table aria-label="table variants" variant={'plain'} 
            sx={{  '& tr > *:nth-of-type(3)': { width: '25%' },}}
            >
                <thead className='text-sm font-bold font-sans text-gray-500'>
                   <tr > {headers.map((head)=>{
                        return <th key={head}>{head}</th>
                    })}</tr>
                </thead>
                <tbody className='font-sans '>
                    {
                        chargingSessions.map((session)=>{
                            return <tr key={session.id}>
                                <td className=''>
                                   <p className='font-medium'>{session.id}</p>

                                </td>
                                <td className=''>
                                   <p className='font-medium'>{session.time}</p>

                                </td>
                                <td className=''>
                                   <p className='font-medium'>{session.chargerType.name}</p> 
                                <Tooltip title={session.chargerType.id}>
                                    <p className='text-xs truncate cursor-default'>Serial Number : {session.chargerType.id}</p>
                                </Tooltip>

                                </td>
                                <td>
                                <p className='font-medium'>{session.stationType}</p>
                                </td>
                                <td>
                                <p className='font-medium'>{session.powerConsumed}</p>
                                </td>
                                <td>
                                <div className='flex flex-col space-y-2'>
                                <p className='font-medium'>{session.averagePowerConsumption.value}</p>
                                <LinearProgress determinate value={session.averagePowerConsumption.percentage}  sx={{width:'100%', color:'#0081AF'}}/>
                                    </div>
                                </td>
                                <td>
                                  <div>
                                     <p className='font-medium'>{session.costPerKwh.value}</p>
                                     <p className='font-medium'>{session.costPerKwh.rate}</p>
                                  </div>
                               
                                </td>
                                <td>
                                <p className='font-medium'>{session.profit}</p>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
            </Card>
        </div>
  )
}

export default ReportsCard