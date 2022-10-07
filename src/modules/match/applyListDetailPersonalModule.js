import {handleActions} from 'redux-actions';

const applyListDetailPersonal = {
  comName: '',
  selfIntroductionDTOList: [{}, {}, {}],
  title: '',
  comUrl: '',
  resumeTitle: '',
  applicationDate: '',
  portfolioTitle: '불사조'
};

export const PERSONAL_APPLY_LIST_DETAIL = 'personal/applyListDetail';

const applyListDetailPersonalReducer = handleActions(
  {
    [PERSONAL_APPLY_LIST_DETAIL]: (state, {payload}) => payload
  },
  applyListDetailPersonal
);

export default applyListDetailPersonalReducer;
