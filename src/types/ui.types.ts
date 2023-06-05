import {
    UPDATE_PAGINATION,
    TOGGLE_SHOW_POPUP,
    LIST_MODE_CHANGE,
    SEARCH_PAYLOAD_CHANGE,
    FETCH_PAYLOAD_LIST_SUCCESS,
    SELECTED_PAYLOAD_LIST
} from "../constants/action-types.contstants"


interface UpdatePaginationAction {
    type : typeof UPDATE_PAGINATION,
    pagination : string
}

interface ToggleShowPopupAction {
    type : typeof TOGGLE_SHOW_POPUP,
}

interface ListModeChangeAction {
    type : typeof LIST_MODE_CHANGE,
    mode : string
}

interface SearchpayloadChangeAction {
    type : typeof SEARCH_PAYLOAD_CHANGE,
    payload :string

}

interface FeatchPayloadListSuccessAction {
    type :typeof FETCH_PAYLOAD_LIST_SUCCESS,
    payloadList : string
}


interface SelectedPayloadListAction {
    type : typeof SELECTED_PAYLOAD_LIST,
    id : string
}
export type  UIActionTypes = 
| UpdatePaginationAction
| ToggleShowPopupAction
| ListModeChangeAction
|SearchpayloadChangeAction
|FeatchPayloadListSuccessAction
|SelectedPayloadListAction;