import {handleActions} from 'redux-actions';

const initstate =[];

export const SET_IDS = 'set-ids';

const MyNoticeIdReducer = handleActions({
    [SET_IDS]: (state, {payload}) => {
        return payload;
    }
},initstate);

export default MyNoticeIdReducer;

