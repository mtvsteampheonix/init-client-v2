import { handleActions } from "redux-actions";

const suggestionListDetail = {
    comName : '',
    comUrl : '',
    numEmp : 0,
    interviewDate : '',
    description : ''
};

export const PERSONAL_SUGGESTION_LIST_DETAIL = 'personal/suggestionListDetail';

const suggestionListDetailPersonalReducer = handleActions(
    {
        [PERSONAL_SUGGESTION_LIST_DETAIL] : (state,{payload})=> payload
    },
    suggestionListDetail
)

export default suggestionListDetailPersonalReducer;