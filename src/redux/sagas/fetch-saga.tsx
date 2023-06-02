import { takeEvery, call, put } from 'redux-saga/effects';
import { actionTypes } from '../constants/actionTypes';
import { IPokemon } from '../../models';

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, workerSaga);
};

function* workerSaga() {
    try {
        const myFetchAll :any = call(fetchAll) ;
        const payload :any= yield *myFetchAll;
        yield put({ type: actionTypes.DATA_LOADED, payload })
    } catch (e) {
        yield put({ type: actionTypes.API_ERROR, payload: e })
    }
};

// Fetch a list of pokemon names
// Chaining promises and checking Promise.all
async function fetchAll() {
    let pokemons :any[]= [];
    let start = performance.now();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        const json = await response.json();
        const arr = json.results;
        return Promise.all(arr.map(async (pokemon :any) => {
            const result = await fetchPokemon(pokemon);
            pokemons.push(result);
        })).then(() => {
            let end = performance.now();
            let timer = (end -start);
            return {pokemons, timer};
        });
    } catch (e) {
        throw new Error(`fetching list of pokemons went wrong`);
    };
};

// Get pokemon details for each pokemon
async function fetchPokemon(pokemon:IPokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return await response.json();
    } catch (e) {
        throw new Error(`fetching ${pokemon.name}'s details went wrong`);
    }
};