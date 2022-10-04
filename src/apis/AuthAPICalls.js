import {LOGIN} from '../modules/authModule';
import httpStatus from 'http-status';
import setCookie from '../utils/auth/setCookie';
import getToken from './../utils/auth/getToken';
import Cookies from 'universal-cookie';

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
    console.log(result.data?.accessTokenExpiresIn);
    console.log(result);
    const cookies = new Cookies();
    if (result.status === httpStatus.OK) {
      setCookie(
        result.data?.grantType,
        result.data?.accessToken,
        result.data?.accessTokenExpiresIn
      );
      return true;
    }
    setCookie('Bearer', '', 0);
    return false;
  };
}
