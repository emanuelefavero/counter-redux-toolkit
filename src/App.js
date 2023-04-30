import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './components/Counter'
import UserWelcome from './components/UserWelcome'

function App() {
  return (
    <>
      <Provider store={store}>
        <UserWelcome />
        <Counter />
      </Provider>
    </>
  )
}

export default App
