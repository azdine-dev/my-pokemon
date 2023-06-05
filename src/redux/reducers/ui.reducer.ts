import { UIActionTypes } from '../../types/ui.types';
import initState from './initial-state';
import {Reducer} from 'redux';
import * as types from '../../constants/action-types.contstants';



const uiReducer: Reducer = (
    state = initState.ui,
    action: UIActionTypes,
  )=>{
  switch (action.type) {
    case types.UPDATE_PAGINATION:
      return {...state, pagination: action.pagination};
    case types.TOGGLE_SHOW_POPUP:
      return {...state, showPopup: !state.showPopup};
    case types.LIST_MODE_CHANGE:
      return {...state, listMode: action.mode};
    case types.SEARCH_PAYLOAD_CHANGE:
      return {...state, searchPayload: action.payload};
    case types.FETCH_PAYLOAD_LIST_SUCCESS:
      return {...state, payloadList: action.payloadList};
    case types.SELECTED_PAYLOAD_LIST:
      return {...state, searchPayload: {...state.searchPayload, id : action.id}};
    default:
      return state;
  }
}

export default uiReducer;