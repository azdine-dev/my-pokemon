import { actionTypes } from "../../constants/actionTypes"

export function fetchAll() {
    return {
        type: actionTypes.DATA_REQUESTED
    }
};

export function resetData() {
    return {
        type: actionTypes.RESET_DATA
    }
};

export function setFilter(filter :string) {
    return {
        type: actionTypes.SET_FILTER,
        payload: filter
    }
};

export function setPokemon(pokemonId:string) {
    return {
        type: actionTypes.SET_POKEMON,
        payload: pokemonId
    }
}