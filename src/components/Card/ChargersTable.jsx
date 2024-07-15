import React, { useEffect, useState } from 'react'
import Card from '.'
import { HiCalendar, HiChevronDown, HiOutlineMapPin } from 'react-icons/hi2'
import { Dropdown, Menu, MenuButton, MenuItem, Table, Tooltip, Typography } from '@mui/joy'
import { HiDotsVertical } from 'react-icons/hi'
import { chargingStations } from '../../data'
import StatusPill from '../StatusPill'
import { useDispatch, useSelector } from 'react-redux'
import { setModalOpen } from '../../redux/layoutSlice/layoutSlice.js'
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://10.80.0.127:3001/web/dumebi123';

function ChargersTable({stations}) {
   
    const headers = ["Charger", "Outlets","Type",  "Status", "Total Sessions", "Location (Lat, Long)", "Total Charging Time"]//Last activity, Location
    const dispatch = useDispatch()
    const [chargers, setChargers] = useState([])
    const [socketOnline, setSocketOnline] = useState(false)

      useEffect(() => {
        setChargers(stations)
        const socket = connectToWebSocket()
        return () => socket.close();
      }, []); 
      useEffect(()=>{
        console.log("Chargers:::::::::::", chargers);
      }, [chargers, setChargers])
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
                        <MenuItem onClick={() => dispatch(setModalOpen({isOpen:true, key:'addStationModal'}))}>Add Charging Station</MenuItem>
                    </Menu>
                </Dropdown>
                     
            </div>
        </div>
        <div className='w-full mt-5 overflow-y-auto h-[210px]'>

           {!socketOnline?<div className='h-full w-full flex items-center justify-center'>
            <Typography>We are currently unable to connect to the charging stations. Please try again later.</Typography>
           </div> : <Table aria-label="table variants" variant={'plain'} sx={{  '& tr > *:nth-child(1)': { width: '25%' },}}>
                <thead className='text-sm font-bold font-sans text-gray-500'>
                   <tr > {headers.map((head)=>{
                        return <th key={head}>{head}</th>
                    })}</tr>
                </thead>
                <tbody className='font-sans '>
                    {
                        chargers?.map((charger)=>{
                            const modedStationObj = {...chargers,name: "Gunsel EV Charger Mark I - Type 1",id: charger.chargeBoxId, outlets: [  {
                                name: 'Charger No. 1',
                                type: charger.ocppProtocol,
                                totalSessions: 397,
                                totalUniqueUsers: 109,
                                totalChargeTime: '102h 36min',
                            },
                            {
                                name: 'Charger No. 2',
                                type: charger.ocppProtocol,
                                totalSessions: 286,
                                totalUniqueUsers: 180,
                                totalChargeTime: '251h 22min',
                            },], location: charger.location, type: charger.ocppProtocol, status: charger.status }
                            return <tr key={modedStationObj.id} 
                            className='cursor-pointer hover:bg-gray-100'
                            onClick={()=>{dispatch(setModalOpen({isOpen:true, key: "viewStationModal", data: modedStationObj}))}}>
                                <td className=''>
                                   <p className='font-medium'>{modedStationObj.name}</p> 
                                <Tooltip title={modedStationObj.id}>
                                    <p className='text-xs truncate cursor-default'>Serial Number : {modedStationObj.id}</p>
                                </Tooltip>

                                </td>
                                <td>
                                    <div>
                                        {
                                            modedStationObj.outlets.map((outlet)=>{
                                                return <p>{outlet.name}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {
                                            modedStationObj.outlets.map((outlet)=>{
                                                return <p>{outlet.type}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                <div>
                                <StatusPill status={charger.status}/>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        {
                                            modedStationObj.outlets.map((outlet)=>{
                                                return <p>{outlet.totalSessions}</p>
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                     <p>{modedStationObj.location?.latitude??0} , {modedStationObj.location?.longitude??0} </p>
                                </td>
                                <td>
                                <div>
                                        {
                                            modedStationObj.outlets.map((outlet)=>{
                                                return <p>{outlet.totalChargeTime}</p>
                                            })
                                        }
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>}
        </div>
        
    </Card>
</div>
  )

    function connectToWebSocket() {
        const socket = new WebSocket(WS_URL, ['web'])

        socket.onopen = event => {
            console.log('WebSocket connection established.')
            setSocketOnline(true)
            socket.send(JSON.stringify([2, 0, 'DeviceList', {}]))
        }

        socket.onmessage = event => {
            const message = JSON.parse(event.data)
            console.log("Event type::::::::", message.type)
            switch (message.type) {
                case 'DeviceList':
                    const devices = message.payload.devices
                    console.log("Web Sockets:::::::::::", devices)
                    setChargers(prevChargers => prevChargers.map(charger => {
                        return devices[charger.chargeBoxId] ? { ...charger, status: { name: devices[charger.chargeBoxId], code: devices[charger.chargeBoxId] } } : charger
                    }
                    )
                    )
                    break
                case 'Offline':
                case 'NewConnection':
                    const device = message.payload.device
                    console.log("Status Change:::::::::::", message.type)
                    setChargers(prevChargers => prevChargers.map(charger => {
                        return device[charger.chargeBoxId] ? { ...charger, status: { name: device[charger.chargeBoxId], code: device[charger.chargeBoxId] } } : charger
                    }
                    )
                    )
                    break



            }

        }
        socket.onclose = event => {
            console.log('WebSocket connection closed. Attempting to reconnect in 1s')
            setSocketOnline(false)
            setTimeout(()=>{
                connectToWebSocket();
            }, 1000)
        }
        return socket
    }
}

export default ChargersTable