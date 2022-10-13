import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import {useState} from 'react';
import {LoadingButton} from '@mui/lab';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import getToken from './../../../utils/auths/getToken';
import {useDispatch} from 'react-redux';
import {CallDeletePersonalMemberAPI} from '../../../apis/members/MemberAPICalls';
import logout from '../../../utils/auths/logout';

const tempData = {
  id: 'tempId'
};

export default function Withdraw() {
  const [isAgree, setIsAgree] = useState(true);
  const [withdrawPassword, setWithdrawPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setWithdrawPassword(e.target.value);
  };

  const handleOnClick = () => {
    setIsAgree(!isAgree);
  };

  return (
    <>
      <Grid container spacing={5} marginTop={5} justifyContent='center'>
        <Grid item xs={12}>
          <Typography align='center' variant='h3'>
            INIT 회원 탈퇴
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            border='3px solid gray'
            borderRadius={2}
            justifyContent='center'
            paddingTop={5}
            paddingBottom={5}
            rowGap={5}
          >
            <Grid item xs={8}>
              <Typography variant='h5' textAlign='center'>
                지금까지 저희 INIT과 함께 해주셔서 감사드립니다.
              </Typography>
              <Typography variant='h5' textAlign='center'>
                탈퇴하기 이전 아래 유의사항을 확인해주시기 바랍니다.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>
            <Grid item xs={8}>
              <Typography align='center'>
                탈퇴하신 아이디는&nbsp;
                <Typography component='span' color='red'>
                  복구가 불가능
                </Typography>
                하며, 추후 동일한 아이디로 재가입이 되지 않습니다.
              </Typography>
              <Typography align='center' color='red'>
                이력서 정보, 구직 활동내역 등 모두 삭제되며, 삭제된 데이터는
                복구되지 않습니다.
              </Typography>
              <Typography align='center'>
                회원탈퇴 시 등록한 게시물은 삭제되지 않으므로, 삭제를 원하시면
                회원탈퇴 전에 삭제해 주시기 바랍니다.
              </Typography>
              {/* <Typography align='center'>
                소셜 로그인 회원의 경우, 모든 정보가 삭제되며 같은 소셜 아이디로
                재가입 시 신규 회원으로 가입됩니다.
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} marginTop={10}>
          <Typography variant='h4' align='right'>
            아이디 :
          </Typography>
        </Grid>
        <Grid item xs={10} marginTop={10}>
          <Typography variant='h4' align='left'>
            {getToken().sub}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h4' align='right'>
            비밀번호 :
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            type='password'
            id='memberPw'
            name='memberPw'
            label='탈퇴를 원하면 비밀번호를 입력해주세요.'
            size='small'
            onChange={handleChange}
            value={withdrawPassword}
            required
          />
        </Grid>
      </Grid>
      <FormGroup
        sx={{alignContent: 'center', height: '100%', marginTop: '5em'}}
      >
        <FormControlLabel
          control={<Checkbox onClick={handleOnClick} />}
          label='유의 사항을 모두 확인했으며, 이에 동의합니다.'
        />
      </FormGroup>
      <Box
        display='flex'
        justifyContent='center'
        marginTop={8}
        marginBottom={8}
      >
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={3}>
            <Button
              component={Link}
              to='/mypage/edit-profile'
              fullWidth
              size='large'
              variant='contained'
            >
              돌아가기
            </Button>
          </Grid>
          <Grid item xs={3}>
            <LoadingButton
              fullWidth
              loading={isAgree}
              onClick={() =>
                dispatch(CallDeletePersonalMemberAPI(withdrawPassword)).then(
                  (res) => {
                    if (res) {
                      logout();
                      return navigate('/withdraw-success');
                    }
                  }
                )
              }
              loadingIndicator='탈퇴하기'
              size='large'
              variant='contained'
            >
              탈퇴하기
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
