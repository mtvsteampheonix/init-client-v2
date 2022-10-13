import {combineReducers} from 'redux';
import {createActions, handleActions} from 'redux-actions';

// initialize
const selectResumeInitState = [
  {
    career: false,
    activity: false,
    external: false,
    foreign: false,
    experience: false,
    qualification: false
  }
];
// initialize
const listInitState = [];

// 액션 상수
export const RESUME_SELECT = 'resume/RESUMESELECT';
export const RESUME_SKILL = 'resume/RESUMESKILL';
export const RESUME_DESIREDJOB = 'resume/DESIREDJOB';
export const RESUME_FOREIGNLANGUAGE = 'resume/FOREIGNLANGUAGE';
export const RESUME_QUALIFICATION = 'resume/QUALIFICATION';
export const RESUME_FINDALL = 'resume/FINDALL';
export const RESUME_FINDRESUMECODE = 'resume/FINDRESUMECODE';

// Action function
const {
  resume: {resumeselect}
} = createActions({[RESUME_SELECT]: () => {}});

const {
  resume: {resumeskill}
} = createActions({[RESUME_SKILL]: () => {}});

const {
  resume: {desiredjob}
} = createActions({[RESUME_DESIREDJOB]: () => {}});

const {
  resume: {foreignlanguage}
} = createActions({[RESUME_FOREIGNLANGUAGE]: () => {}});

const {
  resume: {qualification}
} = createActions({[RESUME_QUALIFICATION]: () => {}});

const {
  resume: {findall}
} = createActions({[RESUME_FINDALL]: () => {}});

const {
  resume: {findresumecode}
} = createActions({[RESUME_FINDRESUMECODE]: () => {}});

// reducer
const resumeSelectReducer = handleActions(
  {
    [RESUME_SELECT]: (state, {payload}) => payload
  },
  selectResumeInitState
);

const resumeSkillReducer = handleActions(
  {
    [RESUME_SKILL]: (state, {payload}) => payload
  },
  listInitState
);

const resumeDesiredJobReducer = handleActions(
  {
    [RESUME_DESIREDJOB]: (state, {payload}) => payload
  },
  listInitState
);

const resumeForeignLanguageReducer = handleActions(
  {
    [RESUME_FOREIGNLANGUAGE]: (state, {payload}) => payload
  },
  listInitState
);

const resumeQualificationReducer = handleActions(
  {
    [RESUME_QUALIFICATION]: (state, {payload}) => payload
  },
  listInitState
);

const resumeFindReducer = handleActions(
  {
    [RESUME_FINDALL]: (state, {payload}) => payload
  },
  listInitState
);

const resumeFindCodeReducer = handleActions(
  {
    [RESUME_FINDRESUMECODE]: (state, {payload}) => payload
  },
  listInitState
);

export const resumeCombineReducer = combineReducers({
  resumeSelectReducer,
  resumeSkillReducer,
  resumeDesiredJobReducer,
  resumeForeignLanguageReducer,
  resumeQualificationReducer,
  resumeFindReducer,
  resumeFindCodeReducer
});
