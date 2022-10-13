import {Avatar, TextField, Typography, Button, Box, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {CallPostLoginAPI} from './../../apis/auths/AuthAPICalls';
import httpStatus from 'http-status';
import getToken from './../../utils/auths/getToken';

function Login() {
  const [loginData, setLoginData] = useState({memberId: '', memberPw: ''});
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  const handleSubmitLogin = (e) => {
    dispatch(CallPostLoginAPI(loginData)).then((res) => {
      if (res.status === httpStatus.OK) {
        if (getToken()?.pwIsTemp === 'Y') {
          alert('비밀번호를 수정해주세요.');
          window.location.href = '/mypage/edit-profile';
          return;
        }
        window.location.href = '/';
        return;
      }
      alert(res.message);
    });
  };
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        alignContent='center'
        flexDirection='column'
        marginTop={10}
        marginBottom={10}
        maxWidth={600}
        marginLeft='auto'
        marginRight='auto'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            return handleSubmitLogin();
          }
        }}
      >
        <Stack rowGap={1} width='100%'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar
              sx={{width: 200, height: 200}}
              src='/logo/titleLogo.svg'
              alt='titlelogo'
            ></Avatar>
            <Typography component='h1' variant='h5'>
              sign in
            </Typography>
          </Box>

          <TextField
            margin='normal'
            required
            fullWidth
            id='memberId'
            label='아이디'
            name='memberId'
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='memberPw'
            label='패스워드'
            type='password'
            id='memberPw'
            autoComplete='current-password'
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value='remember' />}
            label='비밀번호 저장'
          /> */}
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            sx={{marginTop: 3, marginBottom: 2}}
            onClick={handleSubmitLogin}
          >
            로그인
          </Button>
          <Box display='flex' justifyContent='space-between'>
            <Link to='../reset-password'>비밀번호 재설정</Link>
            <Link to='../signup'>회원가입</Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Login;
