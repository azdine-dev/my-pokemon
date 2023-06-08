import { watchAddPokemon, watchFetchPokemon, watchFetchSearchPayloadList, watchGetPokemon } from "./watcher";
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield [
            fork(watchFetchPokemon),
            fork(watchAddPokemon),
            fork(watchGetPokemon),
            fork(watchFetchSearchPayloadList),

          ];
}

