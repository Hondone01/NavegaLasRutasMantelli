import React from 'react'
import Item from './Item'
import { useNavigate } from 'react-router'

const ItemList = ({ list }) => {
  return (
    <div className="product-grid">
  {list.map(item => (
    <Item item={item} key={item.id} />
  ))}
</div>
  )
}

export default ItemList
