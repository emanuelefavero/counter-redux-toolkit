import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge } from '../redux/user'

export default function UserWelcome() {
  const dispatch = useDispatch()

  const name = useSelector((state) => state.user.name)
  const age = useSelector((state) => state.user.age)

  useEffect(() => {
    dispatch(setName('John'))
    dispatch(setAge(32))
  }, [dispatch])

  return (
    <>
      <h1>Hello {name}</h1>
      <p>You are {age}</p>

      <input
        placeholder='Write new name...'
        type='text'
        onChange={(e) => dispatch(setName(e.target.value))}
      />
    </>
  )
}
