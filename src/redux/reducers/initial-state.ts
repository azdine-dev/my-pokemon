import { SEARCH_PAYLOAD } from '../../constants/ui-modes';
import { Pokemon } from '../../types/pokemon.types';

const initialPokemon:Pokemon = {
  id: '',
  name: '',
  url :'',
  abilities : [],
  evolution_chain :'',
  species : {
      url :''
  },
  types : [],
  loading:false,
  stats:[],
  measurements:{weight: 0, height: 0},
  sprites:[],
  moves:[],
}

const initialPokemons : Pokemon [] = [initialPokemon]
 
const initState =  {
  pokemons : [],
  selectedPokemon : initialPokemon,
  ui:{
    searchPayload:SEARCH_PAYLOAD.all_pokemon,
    payloadList:[],
    pagination: {previousUrl:"", nextUrl:"", count:0},
    showPopup:false,
    listMode:'list',
  },
};



export default initState;
