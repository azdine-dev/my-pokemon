import {Provider} from 'react-redux'
import store from './redux/store'
import Pokedex from './container/pokedex/pokedex'
import './App.css'


function App() {
  return (
    <Provider store={store}>
       <Pokedex />
    </Provider>
  )
}

export default App
