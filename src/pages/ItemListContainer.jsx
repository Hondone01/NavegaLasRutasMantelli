import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/fetchData'
import ItemList from '../components/ItemListContainer/ItemList'

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const { category } = useParams()

  useEffect(() => {
    fetchData().then(res => {
      setList(res)

      // Si existe una categoría, filtra los productos
      if (category) {
        const filtered = res.filter(item => item.category === category)
        setFilteredList(filtered)
      } else {
        setFilteredList(res)
      }
    })
  }, [category])

  return (
    <div>
      <h1>Lista de Productos</h1>
      <h1>{greeting}</h1>
      <ItemList list={filteredList} />
    </div>
  )
}

export default ItemListContainer