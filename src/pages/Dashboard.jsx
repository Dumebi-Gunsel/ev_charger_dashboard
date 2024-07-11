import React from 'react'
import Card from '../components/Card'
import { HiDotsVertical } from 'react-icons/hi'
import { chargingStations, stationsInfo, usageInfo } from '../data'
import MediumCard from '../components/Card/MediumCard'
import {  HiCalendar, HiChevronDown,  HiListBullet,  HiOutlineMapPin } from 'react-icons/hi2'
import IncomeCard from '../components/Card/IncomeCard'
import ConsumedCard from '../components/Card/ConsumedCard'
import { Dropdown, MenuButton, Menu , MenuItem, Box, Table, Tooltip} from '@mui/joy'
import ChargersTable from '../components/Card/ChargersTable'
import { PieChart } from '@mui/x-charts'
import UtilizationCard from '../components/Card/UtilizationCard'
import StatusPill from '../components/StatusPill'

function Dashboard() {
    const titles = ["Managing", "Currently", "Electricity consumed", "Income",]
    const headers = ["Charger", "Outlets", "Status", "Total Sessions", "Total Unique Users", "Total Charging Time"]
  
  return (
    <div className=' bg-slate-200 grid grid-cols-5 gap-6 p-6'>
        <MediumCard data={stationsInfo} title={titles[0]}/>
        <MediumCard data={usageInfo} title={titles[1]}/>
        <ConsumedCard title={titles[2]}/>
        <IncomeCard title={titles[3]}/>
        <ChargersTable/>
        <UtilizationCard/>
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
        <div className='w-full mt-10 overflow-y-auto h-[210px]'>
            <Table aria-label="table variants" variant={'plain'} >
                <thead className='text-sm font-bold font-sans text-gray-500'>
                   <tr > {headers.map((head)=>{
                        return <th key={head}>{head}</th>
                    })}</tr>
                </thead>
                <tbody className='font-sans '>
                    {
                        chargingStations.map((station)=>{
                            return <tr key={station.name}>
                                <td className=''>
                                   <p className='font-medium'>{station.name}</p> 
                                <Tooltip title={station.id}>
                                    <p className='text-xs truncate cursor-default'>Serial Number : {station.id}</p>
                                </Tooltip>

                                </td>
                                <td>
                                    <div>
                                        {
                                            station.outlets.map((outlet)=>{
                                                return <p>{outlet.name}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                <div>
                                        {
                                            station.outlets.map((outlet)=>{
                                                return <StatusPill status={outlet.status}/>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                <div>
                                        {
                                            station.outlets.map((outlet)=>{
                                                return <p>{outlet.totalSessions}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                <div>
                                        {
                                            station.outlets.map((outlet)=>{
                                                return <p>{outlet.totalUniqueUsers}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                <div>
                                        {
                                            station.outlets.map((outlet)=>{
                                                return <p>{outlet.totalChargeTime}</p>
                                            })
                                        }
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
            </Card>
        </div>
    </div>
  )
}

export default Dashboard