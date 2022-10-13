import Cookies from 'js-cookie';
import {RESET_DATA} from '../../modules/jobsearch/RegistNoticeModule';
import setCookie from '../../utils/auths/setCookie';

export function CallPostJopSearchAPI() {
  const url = 'http://localhost:8080/jobsearchs';
  return async function postJopSearch(dispatch, getState) {
    const state = getState().registNoticeReducer;
    console.log('등록한 데이터');
    console.log(state);
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify(state)
    });

    // dispatch({type:RESET_DATA});
  };
}

/*수정용 put api만들기*/
export function CallPutJopSearchAPI() {
  const url = 'http://localhost:8080/jobsearchs/';
  return async function postJopSearch(dispatch, getState) {
    const state = getState().registNoticeReducer;
    console.log('등록한 데이터');
    console.log(state);
    const result = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify(state)
    });

    // dispatch({type:RESET_DATA});
  };
}

