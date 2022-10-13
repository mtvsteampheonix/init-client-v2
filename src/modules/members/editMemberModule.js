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

export const GET_EDIT_MEMBER = 'members/GET_EDIT_MEMBER';
export const SET_EDIT_MEMBER = 'members/SET_EDIT_MEMBER';

const editMemberReducer = handleActions(
  {
    [GET_EDIT_MEMBER]: (state, {payload}) => {
      const result = {...state, ...payload};
      return result;
    },
    [SET_EDIT_MEMBER]: (state, {payload}) => payload
  },
  initstate
);

export default editMemberReducer;
