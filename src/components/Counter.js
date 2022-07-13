import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Counter
