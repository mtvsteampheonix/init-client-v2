import {PERSONAL_APPLY_LIST} from '../../modules/match/applyListPersonalModule';
import {PERSONAL_APPLY_LIST_DETAIL} from './../../modules/match/applyListDetailPersonalModule';
const rootURL = 'http://localhost:8080';

export function callApplyListPersonalAPI(searchValue) {
  return async function getApplyListPersonalAPI(dispatch, getState) {
    const result = await fetch(
      rootURL +
        '/matches/personal/apply-list?memberCode=' +
        searchValue.memberCode +
        '&page=' +
        searchValue.page +
        '&criteria=' +
        searchValue.criteria +
        '&content=' +
        searchValue.content
    ).then((result) => result.json());

    dispatch({type: PERSONAL_APPLY_LIST, payload: result.data});
  };
}

export function callApplyListDetailPersonalAPI(noticeCode, memberCode) {
  return async function getApplyListDetailPersonalAPI(dispatch, getState) {
    const result = await fetch(
      rootURL +
        '/matches/personal/apply-detail?noticeCode=' +
        noticeCode +
        '&memberCode=' +
        memberCode
    )
      .then((result) => result.json())
      .then((data) => data.data);
    console.log(result);
    dispatch({type: PERSONAL_APPLY_LIST_DETAIL, payload: result});
  };
}
