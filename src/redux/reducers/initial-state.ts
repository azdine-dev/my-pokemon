import { SEARCH_PAYLOAD } from '../../constants/ui-modes';
const initState =  {
  pokemons: {},
  ui:{
    searchPayload:SEARCH_PAYLOAD.all_pokemon,
    payloadList:[],
    pagination: {previousUrl:"", nextUrl:"", count:0},
    showPopup:false,
    listMode:'list',
  },
};

export default initState;
