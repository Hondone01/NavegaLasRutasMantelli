import React, { useEffect, useState } from 'react'

const FetchExample = () => {
  const url = 'https://restcountries.com/v3.1/all'
  const urlPoke = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=50'
  const [paises, setPaises] = useState([])
  const [poke, setPoke] = useState([])
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //   console.log(data)
        setPaises(data)
      })
  }, [])

  useEffect(() => {
    fetch(urlPoke)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setPoke(data.results)
      })
  }, [])

  //   console.log(paises)
  return (
    <div>
      {paises.map(pais => (
        <div>
          <img src={pais.flags.png} alt='' />
          <h3>{pais.name.common}</h3>
        </div>
      ))}
      {poke.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}

export default FetchExample
