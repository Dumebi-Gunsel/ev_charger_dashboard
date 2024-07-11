import React, { createContext, useContext, useState } from 'react'

const LayoutContext = createContext()

function LayoutProvider({children}) {
  const [isAddStationModalOpen, setAddStation] = useState()
  return (
    <LayoutContext.Provider value={{isAddStationModalOpen, setAddStation}}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider


export const useLayoutContext = ()=> useContext(LayoutContext)