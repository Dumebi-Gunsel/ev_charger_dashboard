import React from 'react'

function StatusPill({status}) {
    const colors = {
        ONLINE: 'bg-[#0081AF]',
        AVAILABLE: 'bg-green-500',
        OUT_OF_SERVICE: 'bg-gray-500',
    }
    const text = {
      ONLINE: 'Available',
      IN_USE: 'In use',
      OUT_OF_SERVICE: 'Out of service',
  }
  return (
    <div className={`${colors[status?.code]??colors['OUT_OF_SERVICE']} py-1 px-2 my-2 text-xs font-medium text-white rounded-full w-fit`}>
        {text[status?.name]??'Out of service'}
    </div>
  )
}

export default StatusPill