import React, {useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { createOrder, updateStock } from '../services/firebaseServices'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { teal } from '@mui/material/colors'



const Checkout = () => {
    const { cart, calcularTotal } = useGlobalStates()
    const [user, setUser] = useState({
      name: '',
      email: '',
      tel: '',
    })

    const navigate = useNavigate()
    useEffect(() => {
      if (cart.length === 0) {
        navigate('/')
      }
    }, [])
    function handleChange(e) {
      console.log(e.target.name)
      setUser({ ...user, [e.target.name]: e.target.value })
    }
    console.log(user)

    const handleSubmit = async (event) => {
      event.preventDefault()
      if (cart.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Carrito vacío',
          text: 'Agregá productos antes de finalizar la compra.',
        })
        return
      }
      
      let hasError = false
    
      if (user.name.length < 5 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email) || user.tel.length !== 10) {
        Swal.fire({
          icon: 'error',
          title: 'Datos inválidos',
          text: 'Por favor, revise los datos ingresados.',
        })
        return
      }
    
      const newOrder = {
        buyer: user,
        total: calcularTotal,
        items: cart,
        date: new Date(),
      }
    
      // 🔁 Actualizamos el stock antes de generar la orden
      try {
        for (const item of cart) {
          await updateStock(item.id, item.quantity)
        }
    
        const res = await createOrder(newOrder)
    
        Swal.fire({
          title: 'Compra finalizada!',
          text: `Tu orden de compra es: ${res.id}`,
          icon: 'success',
        }).then(() => navigate('/'))
      } catch (err) {
        console.log(err)
      }
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Nombre</label>
        <input type='text' name='name' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <label htmlFor=''>Email</label>
        <input type='email' name='email' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <label htmlFor=''>Telefono</label>
        <input type='text' name='tel' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Checkout
