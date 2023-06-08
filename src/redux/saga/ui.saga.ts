import { put, call} from 'redux-saga/effects';
import { PokeFetch} from '../../api';
import { getIDfromURL, getURLFromPayload } from '../../utils/pokemon-operations';
import * as types from '../../constants/action-types.contstants';

export function* fetchSearchPayloadListSaga(payload :any) :any {
  try {
    if(payload.name!=="all_pokemon"){
      const url = getURLFromPayload(payload);
      const response = yield call(PokeFetch, url);
      const payloadList = response.results.map(({ url, name } :any)=>({
        id: getIDfromURL(url),
        name,
        url,
      }));
      yield [
        put({ type: types.FETCH_PAYLOAD_LIST_SUCCESS, payloadList }),
      ];
    }else{
      yield [
        put({ type: types.FETCH_PAYLOAD_LIST_SUCCESS, payloadList:[] }),
      ];
    }
  } catch (error) {
    yield put({ type: 'FETCH_PAYLOAD_LIST_ERROR', error });
  }
}
