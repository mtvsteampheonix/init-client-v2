import Cookies from 'js-cookie';
import {PERSONAL_APPLY_LIST} from '../../modules/match/applyListPersonalModule';
import { PERSONAL_SUGGESTION_LIST_DETAIL } from '../../modules/match/suggestionListDetailPersonalModule';
import { PERSONAL_SUGGESTION_LIST } from '../../modules/match/suggestionListPersonalModule';
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
    dispatch({type: PERSONAL_APPLY_LIST_DETAIL, payload: result});
  };
}

export function callSuggestionListPersonalAPI(searchValue){
  return async function getSuggestionListPersonalAPI(dispatch, getState){
    const result = await fetch(
      rootURL + '/matches/personal/suggestion-list?memberCode='
      + searchValue.memberCode
      + '&page='
      + searchValue.page
      + '&criteria='
      + searchValue.criteria
      + '&content='
      + searchValue.content
    ).then(result => result.json());
    console.log(result);
    dispatch({type : PERSONAL_SUGGESTION_LIST, payload : result.data})
  }
}

export function callSuggestionListDetailPersonalAPI(interviewSuggestionCode){
  return async function getSuggestionListDetailPersonalAPI(dispatch, getState){
      const result = await fetch(
        rootURL + '/matches/personal/suggestion-detail?interviewSuggestionCode='+interviewSuggestionCode
      ).then(result => result.json())
      .then(data=>data.data);
      dispatch({type : PERSONAL_SUGGESTION_LIST_DETAIL, payload : result});
  }
}

export async function callUpdateInterviewSuggestionResponseAPI(interviewSuggestionCode, response){
  const result = await fetch(rootURL+'/matches/personal/suggestion-response', {
    method : 'PUT',
    headers : {
      "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + Cookies.get('bearer')
    },
    body : JSON.stringify({
      interviewSuggestionCode : interviewSuggestionCode,
      response: response
    })
  }).then(result => result.json()
  );
  if(result.data==='success'){
    return result.data;
  }else{
    return result.data;
  }
}
