import React from 'react'

function Card({children, classNames}) {
  return (
    <div className={`${classNames} w-full bg-white rounded-3xl h-fit p-6`}>
        {children}
    </div>
  )
}

export default Card