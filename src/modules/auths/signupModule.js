import {handleActions} from 'redux-actions';

const initstate = {
  formdata: {
    memberId: '',
    memberPw: '',
    memberPwReInput: '',
    memberName: '',
    phone: '',
    email: '',
    verifyCode: ''
  },
  companydata: {comName: '', registNumber: '', comUrl: ''},
  terms: {
    checked: {
      service: false,
      personalInfo: false,
      advertising: false
    }
  }
};

export const SET_FORMDATA = 'auths/SET_FORMDATA';
export const SET_TERMSCHECKED = 'auths/SET_TERMS_CHECKED';
export const SET_COMPANYDATA = 'auths/SET_COMPANYDATA';
export const RESET_SIGNUP_REDUCER = 'auths/RESET_SIGNUP_REDUCER';

const signupReducer = handleActions(
  {
    [SET_FORMDATA]: (state, {payload}) => {
      state.formdata = payload;
      return {...state};
    },
    [SET_TERMSCHECKED]: (state, {payload}) => {
      state.terms.checked = payload;
      return {...state};
    },
    [SET_COMPANYDATA]: (state, {payload}) => {
      state.companydata = payload;
      return {...state};
    },
    [RESET_SIGNUP_REDUCER]: () => ({
      formdata: {
        memberId: '',
        memberPw: '',
        memberPwReInput: '',
        memberName: '',
        phone: '',
        email: '',
        verifyCode: ''
      },
      companydata: {comName: '', registNumber: '', comUrl: ''},
      terms: {
        checked: {
          service: false,
          personalInfo: false,
          advertising: false
        }
      }
    })
  },
  initstate
);

export default signupReducer;
