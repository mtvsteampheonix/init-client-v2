import {PERSONAL_APPLY_LIST} from '../../modules/match/applyListPersonalModule';
const rootURL = 'http://localhost:8080';

export function callApplyListPersonalAPI(searchValue) {
  console.log(searchValue.page);
  return async function getApplyListPersonalAPI(dispatch, getState) {
    const result = await fetch(
      rootURL +
        '/matchs/personal/apply-list?memberCode=' +
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