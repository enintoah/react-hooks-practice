import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterOne = () => {

  const [count, increment, decrement, reset] = useCounter(0, 28)
  

  return (
    <div>
      <h1>Count = {count}</h1>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>Reset</button>
    </div>
  )
}