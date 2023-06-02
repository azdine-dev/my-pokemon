import { IPokemon, PokemonAction, PokemonState } from "../../../models";
import { actionTypes } from "../../constants/actionTypes";


const initialState : PokemonState= {
    pokemons: [] as IPokemon[],
    filter: '',
    currentPokemon: null as any,
    loading: false,
    timer: '',
    error: ''
};

export const mainReducer = (state = initialState, action :PokemonAction)=>{
    switch(action.type) {
        case actionTypes.DATA_REQUESTED:
            return {...state, loading: true};
        case actionTypes.DATA_LOADED:
            return {...state, 
                    pokemons: action.payload.pokemons,
                    timer: action.payload.timer,
                    loading: false};
        case actionTypes.API_ERROR:
            return {...state, error: action.payload, loading: false}
        case actionTypes.RESET_DATA:
            return initialState;
        case actionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        case actionTypes.SET_POKEMON:
            return {...state, currentPokemon: action.payload}
        default:
            return state;
    }

}