import { createContext, useContext, useState, useEffect } from "react"
import { fetchData } from "../services/fetchData"

export const GlobalStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData().then(res => {
      setList(res)
    })
  }, [])

  return (
    <GlobalStates.Provider value={{ cart, setCart, list }}>
      {children}
    </GlobalStates.Provider>
  )
}

export default ContextProvider

export const useGlobalStates = () => {
  return useContext(GlobalStates)
}
