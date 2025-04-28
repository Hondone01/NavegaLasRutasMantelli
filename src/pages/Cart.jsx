import React from 'react'
import { useGlobalStates } from '../context/Context'

const Cart = () => {
    const {cart} = useGlobalStates()
    console.log(cart)

  return (
    <div>
      {cart.map(prod => (
        <div key={prod.id} className='card'>
          <h3>{prod.name}</h3>
          <h4>${prod.price}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h3>Subtotal: ${prod.price * prod.quantity}</h3>
        </div>
      ))}

      <h1>Total: {}</h1>
    </div>
 ) 
}

export default Cart
