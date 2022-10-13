import {handleActions, createActions} from 'redux-actions';

const applyListCompany = [];

export const COMPANY_APPLY_LIST = 'company/applyList';

const applyListCompanyReducer = handleActions(
  {
    [COMPANY_APPLY_LIST]: (state, {payload}) => payload
  },
  applyListCompany
);

export default applyListCompanyReducer;
