import Cookies from 'js-cookie';
import {PERSONAL_APPLY_LIST} from '../../modules/match/applyListPersonalModule';
import {PERSONAL_SUGGESTION_LIST_DETAIL} from '../../modules/match/suggestionListDetailPersonalModule';
import {PERSONAL_SUGGESTION_LIST} from '../../modules/match/suggestionListPersonalModule';
import {PERSONAL_APPLY_LIST_DETAIL} from './../../modules/match/applyListDetailPersonalModule';
import {COMPANY_APPLY_LIST} from './../../modules/match/applyListCompanyModule';
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
    dispatch({type: PERSONAL_APPLY_LIST_DETAIL, payload: result});
  };
}

export function callSuggestionListPersonalAPI(searchValue) {
  return async function getSuggestionListPersonalAPI(dispatch, getState) {
    const result = await fetch(
      rootURL +
        '/matches/personal/suggestion-list?memberCode=' +
        searchValue.memberCode +
        '&page=' +
        searchValue.page +
        '&criteria=' +
        searchValue.criteria +
        '&content=' +
        searchValue.content
    ).then((result) => result.json());
    console.log(result);
    dispatch({type: PERSONAL_SUGGESTION_LIST, payload: result.data});
  };
}

export function callSuggestionListDetailPersonalAPI(interviewSuggestionCode) {
  return async function getSuggestionListDetailPersonalAPI(dispatch, getState) {
    const result = await fetch(
      rootURL +
        '/matches/personal/suggestion-detail?interviewSuggestionCode=' +
        interviewSuggestionCode
    )
      .then((result) => result.json())
      .then((data) => data.data);
    dispatch({type: PERSONAL_SUGGESTION_LIST_DETAIL, payload: result});
  };
}

export async function callUpdateInterviewSuggestionResponseAPI(
  interviewSuggestionCode,
  response
) {
  const result = await fetch(
    rootURL + '/matches/personal/suggestion-response',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify({
        interviewSuggestionCode: interviewSuggestionCode,
        response: response
      })
    }
  ).then((result) => result.json());
  if (result.data === 'success') {
    return result.data;
  } else {
    return result.data;
  }
}

export function callApplyListCompany(searchValue, array) {
  return async function getApplyListCompany(dispatch, getState) {
    let condition = '&';
    array.forEach((element, index, array) => {
      if (index === array.length - 1) {
        condition += 'career=' + element;
      } else {
        condition += 'career=' + element + '&';
      }
    });
    const result = await fetch(
      rootURL +
        '/matches/company/apply-list?noticeCode=' +
        searchValue.noticeCode +
        '&page=' +
        searchValue.page +
        '&criteria=' +
        searchValue.criteria +
        '&content=' +
        searchValue.content +
        '&isAccepted=' +
        searchValue.isAccepted +
        condition
    ).then((result) => result.json());
    console.log(
      rootURL +
        '/matches/company/apply-list?noticeCode=' +
        searchValue.noticeCode +
        '&page=' +
        searchValue.page +
        '&criteria=' +
        searchValue.criteria +
        '&content=' +
        searchValue.content +
        '&isAccepted=' +
        searchValue.isAccepted +
        condition
    );
    dispatch({type: COMPANY_APPLY_LIST, payload: result.data});
  };
}

export async function callNoticeFailure(noticeCode, appicationCodeList) {
  const requestJson = {
    noticeCode: noticeCode,
    applicationCodeList: appicationCodeList
  };
  const result = await fetch(rootURL + '/matches/company/failure', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'Bearer ' + Cookies.get('Bearer')
    },
    body: JSON.stringify(requestJson)
  }).then((res) => res.json());
  console.log(result);
}
