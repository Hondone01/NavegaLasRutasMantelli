import React, { useState } from 'react'

const Counter = ({stock, counter, setCounter}) => {
  const restar = () => {
    setCounter(counter - 1)
  }
  const sumar = () => {
    setCounter(counter + 1)
  }
      
  return (
    <div>
      <button onClick={restar} disabled={counter == 0}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={sumar} disabled={counter >= stock}>
        +
      </button>
    </div>
  )
}

export default Counter
