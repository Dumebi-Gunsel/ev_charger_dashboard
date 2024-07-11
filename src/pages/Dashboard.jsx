import React from 'react'
import { stationsInfo, usageInfo } from '../data'
import MediumCard from '../components/Card/MediumCard'
import IncomeCard from '../components/Card/IncomeCard'
import ConsumedCard from '../components/Card/ConsumedCard'
import ChargersTable from '../components/Card/ChargersTable'
import UtilizationCard from '../components/Card/UtilizationCard'
import ReportsCard from '../components/Card/ReportsCard'
import AddStation from '../components/AddStation'

function Dashboard() {
    const titles = ["Managing", "Currently", "Electricity consumed", "Income",]
   
  
  return (
  <>
    <div className=' bg-slate-200 grid grid-cols-5 gap-6 p-6'>
        <MediumCard data={stationsInfo} title={titles[0]}/>
        <MediumCard data={usageInfo} title={titles[1]}/>
        <ConsumedCard title={titles[2]}/>
        <IncomeCard title={titles[3]}/>
        <ChargersTable/>
        <UtilizationCard/>
        <ReportsCard/>
    </div>
    <AddStation/>
  </>
  )
}

export default Dashboard