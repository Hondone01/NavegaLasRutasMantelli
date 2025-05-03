import React, { useEffect, useState } from 'react'
import { fetchDataById } from '../services/fetchData'
import { useParams } from 'react-router-dom' // ATENCIÓN: debía ser 'react-router-dom' no 'react-router'
import Counter from '../components/Counter'
import { useGlobalStates } from '../context/Context'
import Loader from '../components/Loader'
import { getProductById } from '../services/firebaseServices'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(true) // Manejar loading localmente
  const { cart, setCart } = useGlobalStates()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(id).then(res => {
        setDetail(res)
        setLoading(false)
      })
  }, [])

  const addCart = () => {
    setCart([...cart, { ...detail, quantity: counter }])
  }

  return (
    <div className='detail'>
      <div className='detalle-div'>
        {loading ? (
         <Loader />
        ) : (
          <>
            <img src={detail.image} alt='' width={300} />
            <h2>{detail.name}</h2>
            <h2>{detail.description}</h2>
            <h3>Stock: {detail.stock}</h3>
            <h3>Price: ${detail.price}</h3>
            <p className='parrafo'>{detail.detalle}</p>
            <Counter stock={detail.stock} counter={counter} setCounter={setCounter} />
            <button onClick={addCart} disabled={counter === 0}>
              Agregar al carrito 🛒
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ItemDetailContainer

