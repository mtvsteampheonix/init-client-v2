import {handleActions} from 'redux-actions';

const applyListDetailCompany = {};

export const APPLY_LIST_DETAIL_COMPANY = 'company/applyListDetail';

const applyListDetailCompanyReducer = handleActions(
  {
    [APPLY_LIST_DETAIL_COMPANY]: (state, {payload}) => payload
  },
  applyListDetailCompany
);

export default applyListDetailCompanyReducer;
