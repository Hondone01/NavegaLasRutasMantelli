import { createContext, useContext, useState} from "react";

export const GlobalStates = createContext()

const ContextProvider = ({children}) => {
  const [cart, setCart] =  useState([])

  return (
    <GlobalStates.Provider value={{cart, setCart}}>
      {children}
    </GlobalStates.Provider>
  )
}

export default ContextProvider

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}