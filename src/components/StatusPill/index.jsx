import React from 'react'

function StatusPill({status}) {
    const colors = {
      Available: 'bg-[#0081AF]',
      Charging: 'bg-green-500',
      Unavailable: 'bg-gray-500',
      Faulted: "bg-red-500",
    }
    const text = {
      Available : "Available",
      Preparing : "Preparing",
      Charging : "Charging",
      SuspendedEVSE : "SuspendedEVSE",
      SuspendedEV : "SuspendedEV",
      Finishing : "Finishing",
      Reserved : "Reserved",
      Unavailable : "Unavailable",
      Faulted : "Faulted"
    
  }
  return (
    <div className={`${(colors[status?.code]||colors[status])??colors['Unavailable']} py-1 px-2 my-2 text-xs font-medium text-white rounded-full w-fit`}>
        {(text[status?.name]||text[status])??'Unavailable'}
    </div>
  )
}

export default StatusPill