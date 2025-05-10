import React from 'react'
import { Link } from 'react-router'

const Item = ({ item }) => {
  return (
    <div className='item-products'>
      <h3>{item.title}</h3>
      <img src={item.image} alt='' width={200} />
      <h4> Precio: ${item.price}</h4>
      <Link to={'/item/' + item.id}>Ver detalle</Link>
    </div>
  )
}

export default Item
