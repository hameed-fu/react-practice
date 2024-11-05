import React from 'react'
import PageTitle from './PageTitle'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../features/counterSlice'

function Home() {

  const count = useSelector((state) => state.counter.value)
  const dipatch  = useDispatch();
  return (
    <div> 
      
      <PageTitle title="Home Page" />

      <h1>Count: {count}</h1>
      <button onClick={() => dipatch(increment())}>+</button>
      <button onClick={() => dipatch(decrement())}>-</button>
      
      
      </div>
  )
}

export default Home