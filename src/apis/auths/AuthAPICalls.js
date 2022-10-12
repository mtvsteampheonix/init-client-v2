import httpStatus from 'http-status';
import setCookie from './../../utils/auths/setCookie';

const rootURL = 'http://localhost:8080';

export function CallPostLoginAPI(loginData) {
  return async function postLogin(dispatch, getState) {
    const result = await fetch(rootURL + '/auths/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        memberId: loginData.memberId,
        memberPw: loginData.memberPw
      })
    }).then((res) => res.json());
    // console.log(result.data?.accessTokenExpiresIn);
    // console.log(result);
    if (result.status === httpStatus.OK) {
      setCookie(
        'Bearer',
        result.data?.accessToken,
        result.data?.accessTokenExpiresIn
      );
      return true;
    }
    setCookie('Bearer', '', 0);
    return false;
  };
}

export function CallPutSendEmailVerifyCodeAPI() {
  return async function putSendEmailVerifyCode(dispatch, getState) {
    const signupFormData = getState().signupReducer;
    const {formdata} = signupFormData;
    const result = await fetch(rootURL + '/auths/verify-code/send', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: formdata.email
      })
    }).then((res) => {
      return res.json();
    });
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}

export function CallPutVerifyEmailVerifyCodeAPI() {
  return async function putVerifyEmailVerifyCode(dispatch, getState) {
    const signupFormData = getState().signupReducer;
    const {formdata} = signupFormData;
    const result = await fetch(rootURL + '/auths/verify-code/verify', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include',
      body: JSON.stringify({
        verifyCode: formdata.verifyCode
      })
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}

export function CallGetDuplicateMemberIdAPI() {
  return async function getDuplicateMemberId(dispatch, getState) {
    const signupFormData = getState().signupReducer;
    const {formdata} = signupFormData;
    const {memberId} = formdata;

    const result = await fetch(
      rootURL + '/auths/duplicated-id?memberId=' + memberId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}

export function CallPostSignupPersonalAPI() {
  return async function postSignupPersonal(dispatch, getState) {
    const {formdata} = getState().signupReducer;
    console.log(formdata);
    const result = await fetch(rootURL + '/auths/signup/personal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include',
      body: JSON.stringify({...formdata})
    });
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}

export function CallPostSignupCompanyAPI() {
  return async function postSignupCompany(dispatch, getState) {
    const {formdata, companydata} = getState().signupReducer;
    console.log(companydata);
    console.log(formdata);
    const result = await fetch(rootURL + '/auths/signup/company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include',
      body: JSON.stringify({...formdata, ...companydata})
    });
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}
