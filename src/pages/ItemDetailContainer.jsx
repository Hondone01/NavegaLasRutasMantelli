import React, { useEffect, useState } from 'react'
import { fetchDataById } from '../services/fetchData'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetchDataById(id).then(res => {
      console.log(res)
      setDetail(res)
    })
  }, [])

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>{detail.description}</p>
      <h3>Stock: {detail.stock}</h3>
      <h3>Price: ${detail.price}</h3>
    </div>
  )
}

export default ItemDetailContainer
