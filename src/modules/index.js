import {combineReducers} from 'redux';
import signupModule from './auths/signupModule';
import applyListDetailPersonalReducer from './match/applyListDetailPersonalModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import suggestionListPersonalReducer from './match/suggestionListPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';

const rootReducer = combineReducers({
  signupModule,
  applyListPersonalReducer,
  myPageSidebarReducer,
  applyListDetailPersonalReducer,
  suggestionListPersonalReducer
});

export default rootReducer;
