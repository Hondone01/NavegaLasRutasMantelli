import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemListContainer/ItemList'
import { useGlobalStates } from '../context/Context'
import Loader from '../components/Loader'
import { useParams } from 'react-router'
import { getByCategory, getProducts } from '../services/firebaseServices'

const ItemListContainer = () => {
  const [list, setList] = useState([])
  const { loading, setLoading } = useGlobalStates()
  const { category } = useParams()
  console.log(category)
  // Filtrado de productos por categoría
  useEffect(() => {
    setLoading(true)
    const fetchLista = category ? getByCategory : getProducts
    fetchLista(category && category).then(res => {
      console.log(res)
      setList(res)
      setLoading(false)
    })
  }, [category])

  return <div>{loading ? <Loader /> : <ItemList list={list} />}</div>
}

export default ItemListContainer
