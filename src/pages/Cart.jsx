import React from 'react'
import { useGlobalStates } from '../context/Context'
import { Link } from 'react-router'

const Cart = () => {
  const { cart, calcularTotal } = useGlobalStates()
  console.log(cart)

  return (
    <div>
      {cart.map(prod => (
        <div key={prod.id} className='card'>
          <h3>{prod.title}</h3>
          <h4>${prod.price}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h3>Subtotal: ${prod.price * prod.quantity}</h3>
        </div>
      ))}

      <h1>Total: ${calcularTotal}</h1>
      <Link to='/checkout'>Finalizar compra</Link>
    </div>
  )
}

export default Cart
