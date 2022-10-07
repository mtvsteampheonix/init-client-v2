import {Typography, Grid, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {SET_FORMDATA} from '../../../modules/auths/signupModule';
function InputFormPersonal() {
  const singupData = useSelector((state) => state.signupReducer);
  const {formdata} = singupData;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: SET_FORMDATA,
      payload: {
        ...formdata,
        [event.target.name]: event.target.value
      }
    });
  };
  console.log(formdata);
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={3}
      marginBottom={10}
      marginTop={10}
    >
      <Grid item>
        <Button component={Link} to='/auths/login' variant='contained'>
          취소하기
        </Button>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h4' align='center'>
          개인 회원 가입
        </Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <img
          style={{textAlign: 'center', width: '300px'}}
          src='/logo/titleLogo.svg'
          alt='titleLogo'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='name'
          name='name'
          label='이름(실명)'
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id='memberId'
          name='memberId'
          label='아이디'
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type='password'
          id='memberPw'
          name='memberPw'
          label='비밀번호'
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type='password'
          id='memberPwReinput'
          name='memberPwReinput'
          label='비밀번호 확인'
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={9}>
        <TextField
          fullWidth
          type='email'
          id='email'
          name='email'
          label='이메일'
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth variant='contained' sx={{height: '100%'}}>
          이메일 인증하기
        </Button>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id='certificationNumber'
          name='certificationNumber'
          label='인증 번호'
          required
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant='contained' fullWidth sx={{height: '100%'}}>
          재요청
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='contained' fullWidth sx={{height: '100%'}}>
          인증 확인
        </Button>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <Button
          component={Link}
          to='/member/regist/success'
          variant='contained'
          fullWidth
          sx={{height: '100px'}}
        >
          가입하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputFormPersonal;
