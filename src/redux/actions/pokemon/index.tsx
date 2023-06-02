import { PokemonAction } from "../../../models";
import { actionTypes } from "../../constants/actionTypes";

type Description = {
    type : string,
    payload : string,
    (x:any) :any
}

export function fetchDescription(id :string) {
    return async (dispatch :Description)=> {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
            const json = await response.json();
            const description = json.descriptions[1].description;
            return onSuccess(description);
        } catch (error:any) {
            return onError(error)
        }
        function onSuccess(description :string) {
            dispatch({ type: actionTypes.FETCHED_DESCRIPTION, payload: description})
            return description;
        }
        function onError(error :any) {
            dispatch({ type: actionTypes.API_ERROR, payload: error });
            return error;
        }
    }
};

export function loadMoves(bool:boolean) {
    return {
        type: actionTypes.LOAD_MOVES,
        payload: bool
    }
};

export function loadMove(name:string) {
    return async (dispatch:Description) => {
        dispatch({ type: actionTypes.MOVE_REQUEST });
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
            const move = await response.json();
            return onSucces(move);
        } catch (error) {
            return onError(error)
        }

        function onSucces(move:any) {
            dispatch({ type: actionTypes.MOVE_LOADED, payload: move});
            return move
        }
        function onError(error:any) {
            dispatch({ type: actionTypes.API_ERROR, payload: error });
            return error;
        }
    }
};