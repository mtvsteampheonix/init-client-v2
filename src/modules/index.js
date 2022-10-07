import {combineReducers} from 'redux';
import signupReducer from './auths/signupModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';

const rootReducer = combineReducers({
  signupReducer,
  applyListPersonalReducer,
  myPageSidebarReducer
});

export default rootReducer;
