import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalStates } from '../context/Context'
import ItemList from '../components/ItemListContainer/ItemList'

const ItemListContainer = () => {
  const { list, loading } = useGlobalStates()
  const { category } = useParams()

  const [filteredList, setFilteredList] = useState([])

  const categoryNames = {
    sustratos: "Sustratos y Complementos",
    fertilizantes: "Fertilizantes",
    parafernalia: "Parafernalia"
  }

  useEffect(() => {
    if (category) {
      const filtered = list.filter(item => item.category === category)
      setFilteredList(filtered)
    } else {
      setFilteredList(list)
    }
  }, [category, list])

  return (
    <div>
      <h1 className='titulo'>Lista de Productos</h1>
      <h2 className="categoria-titulo">
        {category ? `Categoría: ${categoryNames[category] || category}` : ""}
      </h2>
      {loading ? 'Cargando lista...' : <ItemList list={filteredList} />}
    </div>
  )
}

export default ItemListContainer
