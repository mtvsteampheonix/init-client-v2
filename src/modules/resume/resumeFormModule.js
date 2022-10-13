import {createActions, handleActions} from 'redux-actions';

// initialize
const resumeFormState = [
  {
    title: '',
    name: '',
    gender: '',
    birthday: '',
    zipCode: '',
    mainAddress: '',
    detailAddress: '',
    alphaAddress: '',
    phone: '',
    mobilePhone: '',
    email: '',
    photoCode: '',
    isOpenedPhoto: false,
    schoolDivision: '',
    schoolName: '',
    schoolStartDate: '',
    schoolEndDate: '',
    major: '',
    recordedScore: '',
    totalScore: '',
    schoolStatus: ''
  }
];

// action const
export const RESUME_MAIN_FORM = 'resume/RESUMEMAINFORM';

// action function
const {
  resume: {resumemainform}
} = createActions({
  [RESUME_MAIN_FORM]: () => {}
});

// reducer
const resumeMainFormReducer = handleActions(
  {
    [RESUME_MAIN_FORM]: (state, {payload}) => payload
  },
  resumeFormState
);

export default resumeMainFormReducer;
