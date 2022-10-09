import {handleActions} from 'redux-actions';

const initstate = {
  memberId: '',
  memberPw: '',
  changeMemberPw: '',
  changeMemberPwReInput: '',
  memberName: '',
  phone: '',
  email: '',
  verifyCode: ''
};

export const GET_PERSONAL_MEMBER = 'members/GET_PERSONAL_MEMBER';
export const SET_PERSONAL_MEMBER = 'members/SET_PERSONAL_MEMBER';

const editPersonalMemberReducer = handleActions(
  {
    [GET_PERSONAL_MEMBER]: (state, {payload}) => {
      const result = {...state, ...payload};
      return result;
    },
    [SET_PERSONAL_MEMBER]: (state, {payload}) => payload
  },
  initstate
);

export default editPersonalMemberReducer;
