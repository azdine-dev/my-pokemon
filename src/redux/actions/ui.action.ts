import * as types from '../../constants/action-types.contstants';

export const toggleShowPopupAction = () => ({
  type: types.TOGGLE_SHOW_POPUP,
});

export const listModeChangeAction = (mode :any) => ({
  type: types.LIST_MODE_CHANGE,
  mode
});

export const searchPayloadChangeAction = (payload :any)=>({
  type: types.SEARCH_PAYLOAD_CHANGE,
  payload
})

export const getPayloadListAction = (payload :any)=>({
  type: types.FETCH_PAYLOAD_LIST_REQUEST,
  payload
})

export const selectPayloadListAction = (id :any) => ({
  type: types.SELECTED_PAYLOAD_LIST,
  id
});
