import { handleActions } from "redux-actions";

const suggestionList = [];

export const PERSONAL_SUGGESTION_LIST = 'personal/suggestionList'

const suggestionListPersonalReducer = handleActions(
    {
        [PERSONAL_SUGGESTION_LIST] : (state, {payload})=>{
            return payload;
        }
    }
    ,
    suggestionList
)

export default suggestionListPersonalReducer;