import { createContext, useContext, useEffect, useState } from "react"
//import { fetchData } from "../services/fetchData"
//import {getProducts} from "../services/firebaseServices.js"
export const GlobalStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  //const [total, setTotal] = useState (240)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState (true)





//llamado a firebase
 // useEffect(() => {
  //  setLoading(true)
 //   getProducts().then(res => {
 //     console.log(res)
 //     setList(res)
 //     setLoading(false)
 //   })
 // }, [])

  const calcularItems = cart.reduce ((total, prod) => {
    return  total + prod.quantity
  },0)
  const calcularTotal = cart.reduce ((total, prod) => {
    return total + (prod.quantity * prod.price)
  },0)
  return (
    <GlobalStates.Provider 
    value={{ 
      cart,
      setCart,
      list,
      loading,
      setLoading,
      calcularTotal,
      calcularItems,
      }}
    >
      {children}
    </GlobalStates.Provider>
  )
}

export default ContextProvider

export const useGlobalStates = () => {
  return useContext(GlobalStates)
}
