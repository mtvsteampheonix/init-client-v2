import {Grid, Typography, TextField, Stack, Divider} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {LoadingButton} from '@mui/lab';
import {CallPutResetPasswordAPI} from './../../apis/auths/AuthAPICalls';
import {useNavigate} from 'react-router-dom';

export default function ResetPassword() {
  const navigete = useNavigate();
  const [form, setForm] = useState({
    email: '',
    memberId: '',
    memberName: ''
  });
  const dispatch = useDispatch();
  console.log(form);
  return (
    <>
      <Grid
        container
        rowGap={5}
        paddingTop={5}
        paddingBottom={5}
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            비밀번호 재설정
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>
            가입시 작성한 항목들을 작성해주세요.
          </Typography>
          <Typography align='center'>
            입력된 메일로 임시 비밀번호를 발급해드리겠습니다.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} marginTop={5}>
          <Stack spacing={3}>
            <Typography align='left' fontWeight='bold'>
              가입시 작성한 이메일
            </Typography>
            <TextField
              type='email'
              name='email'
              sx={{width: '100%'}}
              placeholder='이메일을 입력해주세요'
              required
              autoFocus
              onChange={(event) => {
                setForm({
                  ...form,
                  [event.target.name]: event.target.value
                });
              }}
            />
            <Divider />
            <Typography align='left' fontWeight='bold'>
              아이디
            </Typography>
            <TextField
              type='text'
              name='memberId'
              sx={{width: '100%'}}
              placeholder='아이디를 입력해주세요'
              required
              onChange={(event) => {
                setForm({
                  ...form,
                  [event.target.name]: event.target.value
                });
              }}
            />
            <Divider />
            <Typography align='left' fontWeight='bold'>
              이름
            </Typography>
            <TextField
              type='text'
              name='memberName'
              sx={{width: '100%'}}
              placeholder='이름을 입력해주세요'
              required
              onChange={(event) => {
                setForm({
                  ...form,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={0} md={12} />
        <Grid item xs={12} md={6} marginTop={10}>
          <LoadingButton
            fullWidth
            loading={
              form?.email.length < 1 ||
              form?.memberId.length < 1 ||
              form?.memberName.length < 1
            }
            loadingIndicator='항목들을 입력해주세요'
            variant='contained'
            onClick={() => {
              dispatch(CallPutResetPasswordAPI(form)).then((res) => {
                if (res) {
                  alert('임시비밀번호 발급 성공');
                  return navigete('/');
                }
                return alert('임시 비밀번호 발급 실패');
              });
            }}
          >
            비밀번호 재설정 이메일 보내기
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
}
