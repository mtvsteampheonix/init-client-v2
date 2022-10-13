import {handleActions} from 'redux-actions';

const companyInformation = {};

export const COMPANY_INFORMATION = 'company/INFORMATION';

const companyInformationReducer = handleActions(
  {
    [COMPANY_INFORMATION]: (state, {payload}) => payload
  },
  companyInformation
);

export default companyInformationReducer;
