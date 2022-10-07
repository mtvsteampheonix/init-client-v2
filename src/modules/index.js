import {combineReducers} from 'redux';
import signupModule from './auths/signupModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';

const rootReducer = combineReducers({
  signupModule,
  applyListPersonalReducer,
  myPageSidebarReducer
});

export default rootReducer;
