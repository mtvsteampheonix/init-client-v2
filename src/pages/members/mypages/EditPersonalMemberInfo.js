import {Grid, Typography, Button, TextField, Divider} from '@mui/material';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
  CallGetMemberInfoAPI,
  CallPutMemberAPI
} from '../../../apis/members/MemberAPICalls';
import {SET_EDIT_MEMBER} from '../../../modules/members/editMemberModule';
import {CallPatchPasswordAPI} from '../../../apis/members/MemberAPICalls';

export default function EditPersonalMemberInfo() {
  const profile = useSelector((state) => state.editMemberReducer);
  const dispatch = useDispatch();
  const [verifyFormData, setVerifyFormData] = useState({
    email: true,
    memberId: true,
    memberPw: false,
    changeMemberPw: true,
    changeMemberPwReInput: true,
    memberName: true,
    phone: true
  });

  const handleChange = (event) => {
    let regExp;
    switch (event.target.name) {
      case 'memberId':
        regExp = /^[a-z0-9]{4,20}$/;
        break;
      case 'email':
        regExp =
          /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        break;
      case 'changeMemberPw':
        regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        break;
      case 'memberName':
        regExp = /^[가-힣a-zA-Z0-9]+$/;
        break;
      case 'phone':
        regExp = /^\d{3}-\d{3,4}-\d{4}$/;
        break;
      default:
        break;
    }
    dispatch({
      type: SET_EDIT_MEMBER,
      payload: {
        ...profile,
        [event.target.name]: event.target.value
      }
    });

    regExp &&
      setVerifyFormData({
        ...verifyFormData,
        [event.target.name]: regExp.test(event.target.value)
      });
  };
  useEffect(() => {
    dispatch(CallGetMemberInfoAPI());
  }, []);

  useEffect(() => {
    setVerifyFormData({
      ...verifyFormData,
      memberPw: profile.memberPw.length > 0
    });
  }, [profile.memberPw]);

  useEffect(() => {
    setVerifyFormData({
      ...verifyFormData,
      changeMemberPwReInput:
        profile.changeMemberPw === profile.changeMemberPwReInput
    });
  }, [profile.changeMemberPw, profile.changeMemberPwReInput]);
  console.log(profile);
  return (
    <>
      <Grid container spacing={5} columnSpacing={1} marginBottom={10}>
        <Grid item xs={12}>
          <Typography variant='h4'>회원 정보 조회/수정</Typography>
          <Typography variant='p'>
            회원 정보를 수정하기 위해서는 현재 비밀번호를 필수로 입력해야
            합니다.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {verifyFormData.memberName ? (
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={profile.memberName}
                id='memberName'
                name='memberName'
                label='이름(실명)'
                onChange={handleChange}
                required
              />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <TextField
                fullWidth
                error
                helperText='올바르지 않은 이름형식입니다'
                value={profile.memberName}
                id='memberName'
                name='memberName'
                label='이름(실명)'
                onChange={handleChange}
                required
              />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          {verifyFormData.phone ? (
            <TextField
              fullWidth
              type='tel'
              id='phone'
              name='phone'
              label='휴대폰 번호'
              placeholder='010-0000-0000'
              value={profile.phone}
              onChange={handleChange}
              required
            />
          ) : (
            <TextField
              fullWidth
              type='tel'
              id='phone'
              name='phone'
              label='휴대폰 번호'
              error
              helperText='올바른 휴대폰번호 형식이 아닙니다. 000-0000-0000 형식으로 작성해주세요'
              placeholder='010-0000-0000'
              value={profile.phone}
              onChange={handleChange}
              required
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='이메일'
            value={profile.email}
            disabled
            helperText='현재는 수정할 수 없습니다.'
          />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>비밀 번호 변경</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type='password'
            id='memberPw'
            name='memberPw'
            label='현재 비밀번호'
            value={profile.memberPw}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={8}>
          {verifyFormData.changeMemberPw ? (
            <TextField
              fullWidth
              type='password'
              id='changeMemberPw'
              name='changeMemberPw'
              label='변경할 비밀번호'
              value={profile.changeMemberPw}
              onChange={handleChange}
              required
            />
          ) : (
            <TextField
              fullWidth
              type='password'
              id='changeMemberPw'
              name='changeMemberPw'
              label='변경할 비밀번호'
              error
              onChange={handleChange}
              value={profile.changeMemberPw}
              helperText='숫자와 영문을 섞어 8~16글자를 입력해주세요'
              required
            />
          )}
        </Grid>
        <Grid item xs={8}>
          {verifyFormData.changeMemberPwReInput ? (
            <TextField
              fullWidth
              type='password'
              id='changeMemberPwReInput'
              name='changeMemberPwReInput'
              label='비밀번호 확인'
              value={profile.changeMemberPwReInput}
              onChange={handleChange}
              required
            />
          ) : (
            <TextField
              fullWidth
              error
              type='password'
              id='changeMemberPwReInput'
              name='changeMemberPwReInput'
              value={profile.changeMemberPwReInput}
              label='비밀번호 확인'
              helperText='비밀번호가 불일치합니다.'
              onChange={handleChange}
              required
            />
          )}
        </Grid>
        <Grid item xs={4} display='flex' justifyContent='flex-end'>
          {verifyFormData.memberPw &&
          verifyFormData.changeMemberPw &&
          verifyFormData.changeMemberPwReInput ? (
            <Button
              fullWidth
              variant='contained'
              sx={{height: '100%'}}
              onClick={() => {
                dispatch(CallPatchPasswordAPI()).then((res) => {
                  if (res) {
                    alert('비밀번호 변경에 성공하였습니다.');
                    return;
                  }
                  alert('비밀번호 변경에 실패하였습니다.');
                });
              }}
            >
              변경
            </Button>
          ) : (
            <Button
              fullWidth
              variant='contained'
              disabled
              sx={{height: '100%'}}
            >
              비밀번호를 입력해주세요
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          {verifyFormData.memberPw ? (
            <Button
              fullWidth
              onClick={() => {
                // setIsAlert(true);
                dispatch(CallPutMemberAPI()).then((res) => {
                  if (res) {
                    alert('회원정보 수정에 성공하였습니다.');
                    window.location.reload();
                    return;
                  } else {
                    alert('회원정보 수정에 실패하였습니다.');
                  }
                });
              }}
              variant='contained'
              sx={{height: '50px'}}
            >
              저장
            </Button>
          ) : (
            <Button
              fullWidth
              disabled
              variant='contained'
              sx={{height: '50px'}}
            >
              비밀번호를 입력해주세요
            </Button>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          marginTop={5}
          display='flex'
          justifyContent='flex-end'
        >
          <Button
            component={Link}
            to='/mypage/withdraw'
            color='initRed'
            variant='contained'
            sx={{height: '50px'}}
          >
            회원 탈퇴
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
