import httpStatus from 'http-status';
import Cookies from 'js-cookie';
import setCookie from '../../utils/auths/setCookie';
import {GET_PERSONAL_MEMBER} from './../../modules/members/editPersonalMemberModule';

const rootURL = 'http://localhost:8080';

export function CallGetPersonalMemberInfoAPI() {
  return async function getPersonalMemberInfo(dispatch, getState) {
    const result = await fetch(rootURL + '/members/personal', {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((res) => res.json());
    // console.log(result.data?.accessTokenExpiresIn);
    // console.log(result);
    if (result.status === httpStatus.OK) {
      return dispatch({type: GET_PERSONAL_MEMBER, payload: result.data});
    }
    return false;
  };
}
export function CallPutPersonalMemberAPI() {
  return async function putPersonalMemberAPI(dispatch, getState) {
    const updateForm = getState().editPersonalMemberReducer;
    const result = await fetch(rootURL + '/members/personal', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      },
      body: JSON.stringify({
        memberId: updateForm.memberId,
        memberPw: updateForm.memberPw,
        memberName: updateForm.memberName,
        phone: updateForm.phone
      })
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      setCookie(
        result.data?.grantType,
        result.data?.accessToken,
        result.data?.accessTokenExpiresIn
      );
      return true;
    }
    return false;
  };
}

export function CallPatchPasswordAPI() {
  return async function patchPassword(dispatch, getState) {
    const updateForm = getState().editPersonalMemberReducer;
    const result = await fetch(rootURL + '/members/password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      },
      body: JSON.stringify({
        memberPw: updateForm.memberPw,
        changeMemberPw: updateForm.changeMemberPw,
        changeMemberPwReInput: updateForm.changeMemberPwReInput
      })
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}

export function CallDeletePersonalMemberAPI(memberPw) {
  return async function CallDeletePersonalMember() {
    const result = await fetch(rootURL + '/members/withdraw', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      },
      body: JSON.stringify({
        memberPw: memberPw
      })
    }).then((res) => res.json());
    if (result.status === httpStatus.OK) {
      return true;
    }
    return false;
  };
}
