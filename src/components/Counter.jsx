import React, { useState } from 'react'

const Counter = () => {
    const [counter, seCounter] = useState(0)

const restar = () => {
    setCounter(counter - 1)
}
const sumar = () => {
    setCounter(counter + 1)
}
      
  return (
    <div>
      <button onClick={restar}>-</button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Counter
