import {combineReducers} from 'redux';
import applyListDetailPersonalReducer from './match/applyListDetailPersonalModule';
import applyListPersonalReducer from './match/applyListPersonalModule';
import suggestionListPersonalReducer from './match/suggestionListPersonalModule';
import suggestionListDetailPersonalReducer from './match/suggestionListDetailPersonalModule';
import myPageSidebarReducer from './mypage/mypageSidebarModule';
import editPersonalMemberReducer from './members/editPersonalMemberModule';
import signupReducer from './auths/signupModule';
import signupplzReducer from './admins/signupplzReducer';
import applyListCompanyReducer from './match/applyListCompanyModule';
import applyListDetailCompanyReducer from './match/applyListDetailCompanyModule';
import companyInformationReducer from './match/companyInformationModule';
import getTimeReducer from './match/getTimeModule';
const rootReducer = combineReducers({
  signupReducer,
  applyListPersonalReducer,
  myPageSidebarReducer,
  applyListDetailPersonalReducer,
  suggestionListPersonalReducer,
  suggestionListDetailPersonalReducer,
  editPersonalMemberReducer,
  signupplzReducer,
  applyListCompanyReducer,
  applyListDetailCompanyReducer,
  companyInformationReducer,
  getTimeReducer
});

export default rootReducer;
