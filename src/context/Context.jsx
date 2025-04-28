import { createContext, useContext, useState, useEffect } from "react"
import { fetchData } from "../services/fetchData"

export const GlobalStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState (true)

//llamado a firebase
  useEffect(() => {
    setLoading(true)
    fetchData().then(res => {
      console.log(res)
      setList(res)
      setLoading(false)
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
