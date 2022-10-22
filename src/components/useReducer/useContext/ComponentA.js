import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../../../App'

export const ComponentA = () => {

  const countContext = useContext(CountContext)

  return (
    <div>
      <div>
        {countContext.countState}
      </div>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )

}