import dayjs from 'dayjs';
import {handleActions} from 'redux-actions';

const initstate = {
  title: '',
  content: '',
  education: '',
  career: '',
  preference: '',
  annualIncome: '',
  entLocation: '',
  recruitStartDate: dayjs().format() ,
  recruitEndDate: dayjs().format() ,
  benefits: '',
  selfIntroList: []
};

export const SET_DATA = 'jobsearchs/SET_DATA';
export const RESET_DATA = 'jobsearchs/RESET_DATA';

const registNoticeReducer = handleActions(
  {
    [SET_DATA]: (state, {payload}) => {
      const result = payload;
      return result;
    },
    [RESET_DATA]: (state) => ({
      title: '',
      content: '',
      education: '',
      career: '',
      preference: '',
      annualIncome: '',
      entLocation: '',
      recruitStartDate: dayjs(),
      recruitEndDate: dayjs(),
      benefits: '',
      selfIntroList: []
    })
  },
  initstate
);

export default registNoticeReducer;
