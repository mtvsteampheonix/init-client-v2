import {
  Avatar,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Box,
  Stack
} from '@mui/material';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {CallPostLoginAPI} from './../../apis/auths/AuthAPICalls';

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
      return res
        ? (window.location.href = '/')
        : alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
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
        maxWidth={600}
        marginLeft='auto'
        marginRight='auto'
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                return handleSubmitLogin();
              }
            }}
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
