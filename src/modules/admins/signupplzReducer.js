import {handleActions} from 'redux-actions';
const initstate = [
  {
    comName: '',
    comUrl: '',
    email: '',
    entMember: {
      remainingPost: 0,
      remainingInquire: 0,
      companyCodeFk: 0,
      isActive: 'N',
      memberCodeFk: 0
    },
    memberCodePk: '',
    memberId: '',
    memberName: '',
    memberPw: '',
    phone: '',
    registNumber: 0,
    signupDate: ''
  }
];

export const GET_SIGNUPPLZ = 'admin/GET_SIGNUPPLZ';

const signupplzReducer = handleActions(
  {
    [GET_SIGNUPPLZ]: (state, {payload}) => payload
  },
  initstate
);

export default signupplzReducer;
