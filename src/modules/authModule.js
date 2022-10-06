import {handleActions} from 'redux-actions';

const initstate = {};

export const LOGIN = 'auths/LOGIN';

const authReducer = handleActions(
  {
    [LOGIN]: (state, {payload}) => payload
  },
  initstate
);

export default authReducer;
