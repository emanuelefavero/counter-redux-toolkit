import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../redux/counter'

function Counter() {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default Counter
