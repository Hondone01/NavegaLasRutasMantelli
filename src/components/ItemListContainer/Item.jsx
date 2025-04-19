import React from 'react'
import { Link } from 'react-router'

const Item = ({ item }) => {
  return (
    <div className='item-products'>
      <h3>{item.name}</h3>
      <img
      src={`/assets/${item.image}`} // esto funciona si assets está en "public"
      alt={item.name}
      style={{ width: '200px' }}
      />

      <h4> Precio: ${item.price}</h4>
      <Link className='item-list' to={'/item/' + item.id}>Ver detalle</Link>
    </div>
  )
}

export default Item
