import { IconButton } from '@mui/joy'
import React from 'react'
import { HiX } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { setStationDetails } from '../../../redux/stationsSlice/stationsSlice'
import StatusPill from '../../../components/StatusPill'
import AmmenityTag from '../../../components/AmmenityTag'

function StationDetailDrawer({setOpen, open}) {
    const {stationDetails:station} = useSelector((state)=>state.stationsState)
    const dispatch = useDispatch()
  return (
    <div  className={`left-box-shadow absolute top-36  w-[20%] right-10 bg-gray-100 rounded-xl px-2 py-4 h-2/3 z-10 flex flex-col transition-transform duration-500 ease-in-out overflow-hidden ${
        open ? 'transform translate-x-0' : 'transform translate-x-[calc(100%+2.5rem)] flex flex-col gap-2'
      }`}>
            <div className='flex justify-between items-center px-2 mt-2 mr-2 '>
            <h1 className='font-bold'>{station?.name}</h1>
              <IconButton variant='outlined' onClick={() => {
                //dispatch(setStationDetails(null))
                 setOpen(false)}}>
                <HiX/>
              </IconButton>
            </div>
            <div className='w-full h-full  mt-6 overflow-y-auto'>
                {
                    !station ? 
                    <div className='h-full w-full flex items-center justify-center'>
                        <p>Loading...</p>
                    </div>: 
                    <div className='w-full h-full flex flex-col space-y-4'>
                        <div className='border border-gray-200 rounded-lg flex flex-col space-y-5 p-2'>
                           
                            <div>
                            <p className='font-semibold  text-sm'>Address</p>
                            <p className='text-gray-500'>{station.location}</p>  
                            </div>
                            <div>
                            <p className='font-semibold  text-sm'>Model</p>
                            <p className='text-gray-500'>Gunsel EV Charger Mark II</p>  
                            </div>
                            <div>
                            <p className='font-semibold  text-sm'>Total Available Chargers</p>
                            <p className='text-gray-500'>{station.availableChargers}</p>  
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col text-sm'>
                                <p className='font-semibold  text-sm'>Total Power Dispensed</p>
                                <p className='text-gray-500'>{station.totalPowerDispensed}</p> 
                                </div>
                                <div className='flex flex-col text-sm'>
                                <p className='font-semibold  text-sm'>Charge Rate Per Hour</p>
                                <p className='text-gray-500'>{station.chargeRatePerHour}</p> 
                                </div>
                            </div>
                           
                        </div>
                        <div className='border border-gray-200 rounded-lg flex flex-col space-y-5 p-4'>
                            <h1 className='font-bold'>Chargers</h1>
                            <div className='flex flex-col gap-2'>
                                {station.chargers.map((charger)=>{
                                    return <div className='flex justify-between border-b border-gray-200 py-4'>
                                        <div>
                                        <p >{charger.id}</p>
                                        <StatusPill status={charger.status}/>  
                                        </div>
                                        
                                        <div className='flex text-xs gap-4 '>
                                            <div className='flex'>
                                                <div >
                                                  <p className='font-medium'>Charger Type</p>
                                                  <p className='text-gray-500'>{charger.type}</p>  
                                                </div>
                                                
                                            </div>
                                            <div className='flex'>
                                                <img src="/assets/icons/lightening.png" alt="" className='h-4 mt-[2px]' />
                                                <div >
                                                 <p className='font-medium'>Power output</p>
                                                <p className='text-gray-500'>{charger.powerOutput}</p>   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg flex flex-col space-y-5 p-4'>
                            <h1 className='font-bold'>Ammenities</h1>
                            <div className='flex gap-2'>
                                {station.ammenities.map((am, idx)=>{
                                    return <div className='flex justify-between  '>
                                       
                                        <AmmenityTag ammenity={am} key={idx}/>  
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
  )
}

export default StationDetailDrawer