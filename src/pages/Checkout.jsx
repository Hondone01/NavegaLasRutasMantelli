import React, { useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { createOrder } from '../services/firebaseServices'
import Swal from 'sweetalert2'

const Checkout = () => {
    const { cart, calcularTotal } = useGlobalStates()
    const [user, setUser] = useState({
      name: 'Ricardo',
      email: 'ricardo@gmail.com',
      tel: '123456789',
    })
    const handleSubmit = event => {
      event.preventDefault()
      let newOrder = {
        buyer: user,
        total: calcularTotal,
        items: cart,
        date: new Date(),
      }
      //Creamos una nueva orden
      createOrder(newOrder)
        .then(res => {
          Swal.fire({
            title: 'Compra finalizada!',
            text: `Tu orden de compra es: ${res.id}`,
            icon: 'success',
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Nombre</label>
        <input type='text' />
        <label htmlFor=''>Email</label>
        <input type='text' />
        <label htmlFor=''>Telefono</label>
        <input type='text' />
        <label htmlFor=''>Domicilio</label>
        <input type='text' />
        <label htmlFor=''>Fecha de nacimiento</label>
        <input type='text' />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Checkout
