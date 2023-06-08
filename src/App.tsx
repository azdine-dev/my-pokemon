import { AppRouter } from './routes';
import {Provider} from 'react-redux'
import store from './redux/store'
import Pokedex from './container/pokedex/pokedex';

function App() {
  return (
    <Provider store={store}>
       <Pokedex />;
    </Provider>
  );
}

export default App;
