import { PokemonInfoAction, PokemonInfoState } from "../../../models";
import { actionTypes } from "../../constants/actionTypes";


const initialState : PokemonInfoState= {
    description: '',
    showMoves: false,
    loadingMove: false,
    currentMove: ''
};

export const pokemonReducer = (state = initialState, action :PokemonInfoAction)=>{
    switch (action.type) {
        case actionTypes.FETCHED_DESCRIPTION:
            return {...state, description: action.payload}
        case actionTypes.LOAD_MOVES:    
            return {...state, showMoves: action.payload}
        case actionTypes.MOVE_REQUEST:
            return {...state, loadingMove: true}
        case actionTypes.MOVE_LOADED:
            return {...state, loadingMove: false, currentMove: action.payload}
        default:
            return state;
    }

}