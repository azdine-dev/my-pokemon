import {
    UPDATE_PAGINATION,
    TOGGLE_SHOW_POPUP,
    LIST_MODE_CHANGE,
    SEARCH_PAYLOAD_CHANGE,
    FETCH_PAYLOAD_LIST_SUCCESS,
    SELECTED_PAYLOAD_LIST
} from "../constants/action-types.contstants"



interface UIActAction {
    type :string,
    id? : string,
    pagination?:string,
    payload?:string,
    payloadList?:string
    mode?:String

}
export type  UIActionTypes = 
UIActAction
