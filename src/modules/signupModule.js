import {handleActions} from 'redux-actions';

const initstate = {
  formdata: {},
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

const signupReducer = handleActions(
  {
    [SET_FORMDATA]: (state, {payload}) => {
      state.formdata = payload;
      return {...state};
    },
    [SET_TERMSCHECKED]: (state, {payload}) => {
      state.terms.checked = payload;
      return {...state};
    }
  },
  initstate
);

export default signupReducer;
