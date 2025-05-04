import { createContext, useContext, useEffect, useState } from "react"
export const GlobalStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState (true)

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
      //list,
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
