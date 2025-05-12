import { createContext, useContext, useEffect, useState } from "react"
export const GlobalStates = createContext()

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔢 Cantidad total de items en el carrito
  const calcularItems = cart.reduce((total, prod) => {
    return total + prod.quantity
  }, 0)

  // 💰 Total en $ del carrito
  const calcularTotal = cart.reduce((total, prod) => {
    return total + (prod.quantity * prod.price)
  }, 0)

  // 🧹 Función para vaciar el carrito
  const clearCart = () => {
    setCart([])
  }

  return (
    <GlobalStates.Provider
      value={{
        cart,
        setCart,
        loading,
        setLoading,
        calcularTotal,
        calcularItems,
        clearCart, // <-- ✅ lo exponemos aquí
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

