import React, { useEffect, useState } from 'react'
import { fetchData } from '../services/fetchData'
import ItemList from '../components/ItemListContainer/ItemList'

const ItemListContainer = ({ greeting }) => {
  
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData().then(res => {
      console.log(res)
      setList(res)
    })
  }, [])
  // Filtrado de productos 1:38hs
 
  return (
    <div>
      <h1>Lista de Productos</h1>
      <h1>{greeting}</h1>
      <ItemList list={list} />
    </div>
  )
}

export default ItemListContainer
