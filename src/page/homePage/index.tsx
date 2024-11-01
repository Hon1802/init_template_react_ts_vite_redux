import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setValue } from './common/homeSlice'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value = useSelector((state: any) => state.some.value)
  return (
    <div>
      <h2>Home Page</h2>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
    </div>
  )
}

export default Home
