import React, { useEffect } from 'react'
import { stationsInfo, usageInfo } from '../data'
import MediumCard from '../components/Card/MediumCard'
import IncomeCard from '../components/Card/IncomeCard'
import ConsumedCard from '../components/Card/ConsumedCard'
import ChargersTable from '../components/Card/ChargersTable'
import UtilizationCard from '../components/Card/UtilizationCard'
import ReportsCard from '../components/Card/ReportsCard'
import AddStation from '../components/modals/AddStation'
import { useGetChargingStationsQuery } from '../redux/stationsSlice/stationsActions'
import { useDispatch } from 'react-redux'
import { CircularProgress, Typography } from '@mui/joy'
import { setError, setShowSnackbar } from '../redux/layoutSlice/layoutSlice'
import { setStations } from '../redux/stationsSlice/stationsSlice'
import ViewStation from '../components/modals/ViewStation'
import StationsMapModal from '../components/modals/StationMapModal'
import CreateStation from '../components/modals/CreateStation'

function Dashboard() {
    const titles = ["Managing", "Currently", "Electricity consumed", "Income",]
    const {data, isLoading, error, isError} = useGetChargingStationsQuery()
    const dispatch = useDispatch()
   useEffect(()=>{
    if(!isLoading){
      if(error){
        dispatch(setError(error))
        dispatch(setShowSnackbar(true))
      }
      if(data){
        dispatch(setStations({data, type: 'SET'}))
      }
    }
   },[isLoading, error, data])
  
  return isLoading?
  <div className='h-screen w-screen flex items-center justify-center'>
    <CircularProgress sx={{stroke:'#0081AF'}}/>
  </div> : isError ?
  <div className='h-screen w-screen flex items-center justify-center'>
    <Typography level='body-md'>
      Something wen't wrong, please try again
    </Typography>
  </div>: (
  <>
    <div className=' bg-slate-200 grid grid-cols-5 gap-6 p-6 overflow-y-auto'>
        <MediumCard data={stationsInfo} title={titles[0]} apidata={data}/>
        <MediumCard data={usageInfo} title={titles[1]}/>
        <ConsumedCard title={titles[2]}/>
        <IncomeCard title={titles[3]}/>
        <ChargersTable/>
        <UtilizationCard/>
        <ReportsCard/>
    </div>
    <CreateStation/>
    {/* <AddStation/> */}
    <ViewStation/>
    <StationsMapModal/>
  </>
  )
}

export default Dashboard