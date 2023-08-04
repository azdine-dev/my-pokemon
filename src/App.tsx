import {Provider} from 'react-redux'
import store from './redux/store'
import Pokedex from './container/pokedex/Pokedex'
import './App.css'
import DetailsView from './components/DetailsView/DetailsView'


function App() {
  return (
    <Provider store={store}>
       <Pokedex />
       <DetailsView/>
    </Provider>
  )
}

export default App
