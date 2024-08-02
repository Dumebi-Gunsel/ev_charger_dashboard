import React from 'react'
import { HiArrowUpRight, HiOutlineBanknotes } from 'react-icons/hi2';
import { stations } from '../../../data';
import { useDispatch } from 'react-redux';
import { setStationDetails } from '../../../redux/stationsSlice/stationsSlice';
import { Input } from '@mui/joy';
import { HiFilter, HiOutlineFilter, HiSearch } from 'react-icons/hi';
import { BiFilter } from 'react-icons/bi';

function StationsList({setOpen}) {
    const dispatch = useDispatch()
  return (
    <div className='w-1/6 flex flex-col h-full bg-gray-400/45 absolute top-0 left-0 z-40 shadow-xl'>
            <div className='text-center py-5 sticky z-10 w-full px-2'>
               <Input placeholder='Search stations' type='search' startDecorator={<HiSearch className='text-black'/>} endDecorator={<HiOutlineFilter className='text-black'/>}/>
            </div>
            <div className='flex-1 space-y-2 px-2 my-2 h-full overflow-y-auto'>
                {
                    stations.map((station)=>{
                        const chargerTypes = new Set();
                        station.chargers.forEach(charger => {
                        chargerTypes.add(charger.type);
                        });
                        const types = Array.from(chargerTypes)
                        return (<div key={station.id} 
                        onClick={()=>{
                            dispatch(setStationDetails(station))
                            setOpen(true)}}
                        className=' bg-white h-36 flex space-x-2 p-2 border border-gray-200 rounded-lg cursor-pointer relative transition-all duration-300 hover:bg-gray-50 overflow-hidden'>
                            <div className='overflow-hidden rounded-lg h-16 w-16'>
                                <img src={station.image} alt="station image" className='w-full h-full object-cover'/>
                            </div>
                            <div className='h-full overflow-hidden'>
                               <div className='space-y-1'>
                               <p className='font-bold'>{station.name}</p> 
                                <div>
                                 
                               <p className='font-medium text-sm text-gray-500'>{station.location}</p> 
                               <div className='flex gap-1'>
                                <HiOutlineBanknotes className='text-gray-500'/>
                               <p className='text-xs text-gray-500'>{station.chargeRatePerHour}/Kwh</p>
                               </div>  
                            </div>
                               
                              
                            </div>
                            <div className='mt-2 flex space-x-2'>
                                <div>
                                   <p className='text-xs mb-1 font-medium'>Active Chargers</p> 
                                   <p className='text-xs'>{station.availableChargers}</p>
                                </div>
                                <div>
                                   <p className='text-xs mb-1 font-medium'>Charger types</p>
                                  
                                   <div className='flex flex-wrap text-[10px] gap-1'>{types.map((type)=><div className='px-1 rounded-2xl bg-gray-400 text-white'>{type}</div>)}</div>
                                  
                                </div>
                                
                           </div>
                            </div>
                            <div className='absolute top-2 right-2'>
                               <HiArrowUpRight className='text-xs text-gray-700'/>  
                            </div>
                           
                           
                            </div>)
                    })
                }
            </div>
         </div>
  )
}

export default StationsList