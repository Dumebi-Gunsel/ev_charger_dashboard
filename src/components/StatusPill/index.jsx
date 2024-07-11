import React from 'react'

function StatusPill({status}) {
    const colors = {
        IN_USE: 'bg-blue-700',
        AVAILABLE: 'bg-green-700',
        OUT_OF_SERVICE: 'bg-gray-500',
    }
  return (
    <div className={`${colors[status.code]} py-1 px-2 my-2 text-xs font-medium text-white rounded-full w-fit`}>
        {status.name}
    </div>
  )
}

export default StatusPill