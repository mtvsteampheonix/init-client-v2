import {handleActions} from 'redux-action';

const applyListPersonal = [];

export const PERSONAL_APPLY_LIST = 'personal/applyList';

const applyListPersonalReducer = handleActions(
  {
    [PERSONAL_APPLY_LIST]: (state, {payload}) => payload
  },
  applyListPersonal
);

export default applyListPersonalReducer;
