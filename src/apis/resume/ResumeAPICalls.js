import Cookies from 'js-cookie';
import {
  RESUME_DESIREDJOB,
  RESUME_FINDALL,
  RESUME_FINDRESUMECODE,
  RESUME_FOREIGNLANGUAGE,
  RESUME_QUALIFICATION,
  RESUME_SKILL
} from '../../modules/resume/addStepModule';

const prefixURL = 'http://127.0.0.1:8080';

export function CallInsertResumeAPI(body) {
  const requestURL = prefixURL + '/resumes';
  console.log(Cookies.get('bearer'));
  fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + Cookies.get('bearer')
      // 'Bearer ' +
      // 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNjY1MTAwNzMzfQ.tnismZbl4K_4pqYD_k-MWDvt9nmH1PLsMSPlv5AMvlfvrLXiNwlzcfUYxevdVCviRt7_LfLF9lG3l_ELMlC_7g'
    },
    body: body
  }).then((response) => console.log(response.json()));
}

export const CallSkillListAPI = () => {
  const requestURL = prefixURL + '/resumes/skillList';

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    // console.log(result.data);

    dispatch({type: RESUME_SKILL, payload: result.data});
  };
};

export const CallDesiredJobListAPI = () => {
  const requestURL = prefixURL + '/resumes/desiredJob';

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    console.log(result.data);

    dispatch({type: RESUME_DESIREDJOB, payload: result.data});
  };
};

export const CallForeignLanguageTestAPI = () => {
  const requestURL = prefixURL + '/resumes/foreign-test';
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    console.log(result.data);

    dispatch({type: RESUME_FOREIGNLANGUAGE, payload: result.data});
  };
};

export const CallQualificationListAPI = () => {
  const requestURL = prefixURL + '/resumes/qualification-list';
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    console.log(result.data);

    dispatch({type: RESUME_QUALIFICATION, payload: result.data});
  };
};

export const CallFindResumeAPI = (resumeCode) => {
  const requestURL = prefixURL + '/resumes/' + resumeCode;
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    console.log(result.data);

    dispatch({type: RESUME_FINDALL, payload: result.data});
  };
};

export const CallResumeCodeAPI = () => {
  const requestURL = prefixURL + '/resumes';
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('bearer')
      }
    }).then((response) => response.json());

    console.log(result.data);

    dispatch({type: RESUME_FINDRESUMECODE, payload: result.data});
  };
};

export function CallDeleteResumeAPI(resumeCode) {
  const requestURL = prefixURL + '/resumes/' + resumeCode;

  fetch(requestURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + Cookies.get('bearer')
    }
  }).then((response) => console.log(response.json()));
}
