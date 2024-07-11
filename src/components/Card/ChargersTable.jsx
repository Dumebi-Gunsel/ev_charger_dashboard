import React from 'react'
import Card from '.'
import { HiCalendar, HiChevronDown, HiOutlineMapPin } from 'react-icons/hi2'
import { Dropdown, Menu, MenuButton, MenuItem, Table, Tooltip } from '@mui/joy'
import { HiDotsVertical } from 'react-icons/hi'
import { chargingStations } from '../../data'
import StatusPill from '../StatusPill'

function ChargersTable() {
    const headers = ["Charger", "Outlets", "Status", "Total Sessions", "Total Unique Users", "Total Charging Time"]
  return (
    <div className='col-span-4'>
    <Card>
        <div className='flex justify-between items-center'>
            <div>
                <p className='uppercase text-lg font-bold'>Managed Charging Stations</p>
            </div>
            <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors duration-500'>
                    <HiCalendar className='text-2xl'/>
                    <p>Last month</p>
                    <HiChevronDown/>
                </div>
                <div className='flex items-center space-x-1 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors duration-500'>
                    <HiOutlineMapPin/>
                    <p>View on map</p>
                </div>
                <Dropdown>
                    <MenuButton
                        variant="plain">
                        <HiDotsVertical className=' cursor-pointer text-2xl'/>
                    </MenuButton>
                    <Menu
                        variant="plain">
                        <MenuItem>Add Charging Station</MenuItem>
                    </Menu>
                </Dropdown>
                     
            </div>
        </div>
        <div className='w-full mt-10 overflow-y-auto h-[190px]'>
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
  )
}

export default ChargersTable