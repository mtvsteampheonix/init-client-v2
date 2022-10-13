import {Button, Grid, TextField, Typography, Divider, Box} from '@mui/material';
import FaxIcon from '@mui/icons-material/Fax';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SET_COMPANYDATA,
  SET_FORMDATA
} from '../../../modules/auths/signupModule';
import {
  CallGetDuplicateMemberIdAPI,
  CallPostSignupCompanyAPI,
  CallPutSendEmailVerifyCodeAPI,
  CallPutVerifyEmailVerifyCodeAPI
} from '../../../apis/auths/AuthAPICalls';
export default function InputFormCompany() {
  const signupData = useSelector((state) => state.signupReducer);
  const {formdata, companydata} = signupData;
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isVerifyEmail, setIsverifyEmail] = useState(false);
  const [checkId, setCheckId] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [verifyFormData, setVerifyFormData] = useState({
    email: true,
    memberId: true,
    memberPw: true,
    memberPwReInput: true,
    memberName: true,
    phone: true
  });

  const handleCompanyChange = (event) => {
    dispatch({
      type: SET_COMPANYDATA,
      payload: {...companydata, [event.target.name]: event.target.value}
    });
  };

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
      case 'memberPw':
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
      type: SET_FORMDATA,
      payload: {
        ...formdata,
        [event.target.name]: event.target.value
      }
    });
    (event.target.name === 'memberPwReInput' ||
      event.target.name === 'memberPw') &&
      setVerifyFormData({
        ...verifyFormData,
        memberPwReInput:
          signupData.formdata.memberPw === signupData.formdata.memberPwReInput
      });
    regExp &&
      setVerifyFormData({
        ...verifyFormData,
        [event.target.name]: regExp.test(event.target.value)
      });

    event.target.name === 'memberId' && setCheckId(true);
  };
  console.log(signupData);
  return (
    <>
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
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            기업 회원 가입
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={2}
            marginBottom={5}
            marginTop={5}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={companydata.comName}
                id='comName'
                name='comName'
                label='회사명'
                onChange={handleCompanyChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={companydata.registNumber}
                id='registNumber'
                name='registNumber'
                label='사업자 등록번호 ( "-" 없이 적어주세요 )'
                placeholder='0000000000'
                onChange={handleCompanyChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={companydata.comUrl}
                id='comUrl'
                name='comUrl'
                label='홈페이지 주소'
                placeholder='http://example.com'
                onChange={handleCompanyChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>
            <Grid item xs={12}>
              {verifyFormData.memberName ? (
                <TextField
                  fullWidth
                  value={formdata.memberName}
                  id='memberName'
                  name='memberName'
                  label='담당자 이름(실명)'
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  helperText='올바르지 않은 이름형식입니다'
                  value={formdata.memberName}
                  id='memberName'
                  name='memberName'
                  label='담당자 이름(실명)'
                  onChange={handleChange}
                  required
                />
              )}
            </Grid>
            <Grid item xs={9}>
              {isSendEmail ? (
                <TextField
                  fullWidth
                  type='email'
                  id='email'
                  name='email'
                  label='이메일'
                  value={formdata.email}
                  onChange={handleChange}
                  disabled
                  required
                />
              ) : verifyFormData.email ? (
                <TextField
                  fullWidth
                  type='email'
                  id='email'
                  name='email'
                  label='이메일'
                  placeholder='example@example.com'
                  value={formdata.email}
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextField
                  fullWidth
                  type='email'
                  id='email'
                  name='email'
                  label='이메일'
                  error
                  helperText='올바른 이메일 양식을 입력해주세요'
                  value={formdata.email}
                  onChange={handleChange}
                  required
                />
              )}
            </Grid>
            <Grid item xs={3}>
              {isSendEmail ? (
                <Button
                  fullWidth
                  variant='contained'
                  sx={{height: '100%'}}
                  disabled
                >
                  인증번호를 입력해주세요
                </Button>
              ) : verifyFormData.email ? (
                <Button
                  fullWidth
                  variant='contained'
                  sx={{height: '100%'}}
                  onClick={() => {
                    if (formdata.email === '') {
                      return alert('이메일을 입력해주세요');
                    }
                    setIsSendEmail(true);
                    alert('이메일 전송이 완료되었습니다.');
                    dispatch(CallPutSendEmailVerifyCodeAPI()).then(
                      (emailSendResult) => {
                        setIsSendEmail(emailSendResult);
                      }
                    );
                  }}
                >
                  인증번호 전송하기
                </Button>
              ) : (
                <Button
                  fullWidth
                  disabled
                  variant='contained'
                  sx={{height: '100%'}}
                >
                  올바른 이메일이 아닙니다.
                </Button>
              )}
            </Grid>
            {isSendEmail ? (
              isVerifyEmail ? (
                <>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id='verifyCode'
                      name='verifyCode'
                      label='인증 번호'
                      onChange={handleChange}
                      disabled
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant='contained'
                      fullWidth
                      sx={{height: '100%'}}
                      disabled
                    >
                      인증 완료
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id='verifyCode'
                      name='verifyCode'
                      label='인증 번호'
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant='contained'
                      fullWidth
                      sx={{height: '100%'}}
                      onClick={() => {
                        setIsSendEmail(false);
                      }}
                    >
                      이메일 다시 작성하기
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant='contained'
                      fullWidth
                      sx={{height: '100%'}}
                      onClick={() =>
                        dispatch(CallPutVerifyEmailVerifyCodeAPI()).then(
                          (emailVerifyResult) => {
                            setIsverifyEmail(emailVerifyResult);
                            return emailVerifyResult
                              ? alert('이메일 인증이 완료되었습니다.')
                              : alert(
                                  '이메일 인증이 실패했습니다. 인증번호를 다시 확인해주세요'
                                );
                          }
                        )
                      }
                    >
                      인증 확인
                    </Button>
                  </Grid>
                </>
              )
            ) : null}
            <Grid item xs={12}>
              {verifyFormData.phone ? (
                <TextField
                  fullWidth
                  type='tel'
                  id='phone'
                  name='phone'
                  label='휴대폰 번호'
                  placeholder='010-0000-0000'
                  value={formdata.phone}
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
                  helperText='올바른 휴대폰번호 형식이 아닙니다. ( 000-0000-0000 )'
                  placeholder='010-0000-0000'
                  value={formdata.phone}
                  onChange={handleChange}
                  required
                />
              )}
            </Grid>

            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>
            <Grid item xs={12}>
              {verifyFormData.memberId ? (
                checkId ? (
                  <TextField
                    fullWidth
                    id='memberId'
                    name='memberId'
                    label='아이디'
                    value={formdata.memberId}
                    onChange={handleChange}
                    required
                    onBlur={() => {
                      dispatch(CallGetDuplicateMemberIdAPI()).then((res) =>
                        res ? setCheckId(true) : setCheckId(false)
                      );
                    }}
                  />
                ) : (
                  <TextField
                    fullWidth
                    id='memberId'
                    name='memberId'
                    label='아이디'
                    value={formdata.memberId}
                    onChange={handleChange}
                    error
                    helperText='중복된 아이디 입니다.'
                    required
                    onBlur={(e) => {
                      if (verifyFormData.memberPw) {
                        dispatch(CallGetDuplicateMemberIdAPI()).then((res) =>
                          res ? setCheckId(true) : setCheckId(false)
                        );
                      }
                    }}
                  />
                )
              ) : (
                <TextField
                  error
                  fullWidth
                  id='memberId'
                  name='memberId'
                  label='아이디'
                  value={formdata.memberId}
                  helperText='영문 혹은 숫자 4~20글자를 입력해주세요'
                  onChange={handleChange}
                  required
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {verifyFormData.memberPw ? (
                <TextField
                  fullWidth
                  type='password'
                  id='memberPw'
                  name='memberPw'
                  label='비밀번호'
                  value={formdata.memberPw}
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextField
                  fullWidth
                  type='password'
                  id='memberPw'
                  name='memberPw'
                  label='비밀번호'
                  error
                  onChange={handleChange}
                  value={formdata.memberPw}
                  helperText='숫자와 영문을 섞어 8~16글자를 입력해주세요'
                  required
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {verifyFormData.memberPwReInput ? (
                <TextField
                  fullWidth
                  type='password'
                  id='memberPwReInput'
                  name='memberPwReInput'
                  label='비밀번호 확인'
                  value={formdata.memberPwReInput}
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  type='password'
                  id='memberPwReInput'
                  name='memberPwReInput'
                  value={formdata.memberPwReInput}
                  label='비밀번호 확인'
                  helperText='비밀번호가 불일치합니다.'
                  onChange={handleChange}
                  required
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} display='flex' alignContent='center'>
          <img
            style={{textAlign: 'center', width: '300px'}}
            src='/logo/titleLogo.svg'
            alt='titleLogo'
          />
        </Grid>
        <Grid
          item
          xs={12}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            width='50%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            border='1px solid black'
            borderRadius='10px'
            padding={3}
          >
            <Typography height='100%' variant='body'>
              사업자 등록증은 팩스로 보내주시기 바랍니다.{' '}
            </Typography>
            <Box display='flex'>
              <FaxIcon />
              <Typography variant='body'>팩스: 000-123-4567</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          {isVerifyEmail &&
          verifyFormData.memberId &&
          verifyFormData.memberPw &&
          verifyFormData.memberPwReInput &&
          checkId ? (
            <Button
              variant='contained'
              fullWidth
              sx={{height: '100px'}}
              onClick={() => {
                dispatch(CallPostSignupCompanyAPI()).then((result) => {
                  if (result) {
                    alert('회원가입이 완료되었습니다.');
                    return navigate('/');
                  }
                  alert('회원가입이 실패하였습니다.');
                });
              }}
            >
              가입하기
            </Button>
          ) : (
            <Button
              variant='contained'
              fullWidth
              disabled
              sx={{height: '100px'}}
            >
              필수정보들을 입력해 주세요
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
