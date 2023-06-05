import {combineReducers} from 'redux'
import pokemonReducer from './pokemon.reducer'
import uiReducer from './ui.reducer'


const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    ui: uiReducer,
  })
  
  export type RootState = ReturnType<typeof rootReducer>
  
  export default rootReducer
  