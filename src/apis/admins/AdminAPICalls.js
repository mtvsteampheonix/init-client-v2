import httpStatus from 'http-status';
import Cookies from 'js-cookie';
import {json} from 'react-router-dom';
import {GET_SIGNUPPLZ} from '../../modules/admins/signupplzReducer';

const rootURL = 'http://localhost:8080';

export function callGetSignupplzListAPI() {
  return async function getSignupplzList(dispatch, getState) {
    const result = await fetch(rootURL + '/admins/signup-plzs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      }
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return dispatch({type: GET_SIGNUPPLZ, payload: result.data});
    }
    return false;
  };
}

export function callGetSignupplzDetailAPI(memberCodePk) {
  return async function getSignupplzDetail(dispatch, getState) {
    const result = await fetch(
      rootURL + '/admins/signup-plzs/' + memberCodePk,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + Cookies.get('Bearer')
        }
      }
    ).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return result.data;
    }
    return null;
  };
}

export function callPutCompanyMemberIsActive(details) {
  return async function putCompanyMemberIsActive(dispatch, getState) {
    const {memberCodePk} = details;
    const result = await fetch(rootURL + '/admins/member/company/is-active', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify({
        memberCodePk: memberCodePk
      })
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}
