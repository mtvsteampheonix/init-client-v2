import {Button, Grid, TextField, Typography, Divider, Box} from '@mui/material';
import FaxIcon from '@mui/icons-material/Fax';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
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
    phone: true,
    registNumber: true
  });

  const handleCompanyChange = (event) => {
    dispatch({
      type: SET_COMPANYDATA,
      payload: {...companydata, [event.target.name]: event.target.value}
    });
  };
  useEffect(() => {
    const regExp = /^[0-9]{10}$/;
    companydata?.registNumber.length > 0
      ? setVerifyFormData({
          ...verifyFormData,
          registNumber: regExp.test(companydata.registNumber)
        })
      : setVerifyFormData({
          ...verifyFormData,
          registNumber: true
        });
  }, [companydata?.registNumber]);

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
        regExp = /^[???-???a-zA-Z0-9]+$/;
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
            ????????????
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            ?????? ?????? ??????
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
                label='?????????'
                onChange={handleCompanyChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              {verifyFormData.registNumber ? (
                <TextField
                  fullWidth
                  value={companydata.registNumber}
                  id='registNumber'
                  name='registNumber'
                  label='????????? ???????????? ( "-" ?????? ??????????????? )'
                  placeholder='0000000000'
                  onChange={handleCompanyChange}
                  required
                />
              ) : (
                <TextField
                  error
                  helperText='10????????? ????????? ??????????????????'
                  fullWidth
                  value={companydata.registNumber}
                  id='registNumber'
                  name='registNumber'
                  label='????????? ???????????? ( "-" ?????? ??????????????? )'
                  placeholder='0000000000'
                  onChange={handleCompanyChange}
                  required
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={companydata.comUrl}
                id='comUrl'
                name='comUrl'
                label='???????????? ??????'
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
                  label='????????? ??????(??????)'
                  onChange={handleChange}
                  required
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  helperText='???????????? ?????? ?????????????????????'
                  value={formdata.memberName}
                  id='memberName'
                  name='memberName'
                  label='????????? ??????(??????)'
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
                  label='?????????'
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
                  label='?????????'
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
                  label='?????????'
                  error
                  helperText='????????? ????????? ????????? ??????????????????'
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
                  ??????????????? ??????????????????
                </Button>
              ) : verifyFormData.email ? (
                <Button
                  fullWidth
                  variant='contained'
                  sx={{height: '100%'}}
                  onClick={() => {
                    if (formdata.email === '') {
                      return alert('???????????? ??????????????????');
                    }
                    setIsSendEmail(true);
                    alert('????????? ????????? ?????????????????????.');
                    dispatch(CallPutSendEmailVerifyCodeAPI()).then(
                      (emailSendResult) => {
                        setIsSendEmail(emailSendResult);
                      }
                    );
                  }}
                >
                  ???????????? ????????????
                </Button>
              ) : (
                <Button
                  fullWidth
                  disabled
                  variant='contained'
                  sx={{height: '100%'}}
                >
                  ????????? ???????????? ????????????.
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
                      label='?????? ??????'
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
                      ?????? ??????
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
                      label='?????? ??????'
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
                      ????????? ?????? ????????????
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
                              ? alert('????????? ????????? ?????????????????????.')
                              : alert(
                                  '????????? ????????? ??????????????????. ??????????????? ?????? ??????????????????'
                                );
                          }
                        )
                      }
                    >
                      ?????? ??????
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
                  label='????????? ??????'
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
                  label='????????? ??????'
                  error
                  helperText='????????? ??????????????? ????????? ????????????. ( 000-0000-0000 )'
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
                    label='?????????'
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
                    label='?????????'
                    value={formdata.memberId}
                    onChange={handleChange}
                    error
                    helperText='????????? ????????? ?????????.'
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
                  label='?????????'
                  value={formdata.memberId}
                  helperText='?????? ?????? ?????? 4~20????????? ??????????????????'
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
                  label='????????????'
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
                  label='????????????'
                  error
                  onChange={handleChange}
                  value={formdata.memberPw}
                  helperText='????????? ????????? ?????? 8~16????????? ??????????????????'
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
                  label='???????????? ??????'
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
                  label='???????????? ??????'
                  helperText='??????????????? ??????????????????.'
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
              ????????? ???????????? ????????? ??????????????? ????????????.{' '}
            </Typography>
            <Box display='flex'>
              <FaxIcon />
              <Typography variant='body'>??????: 000-123-4567</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          {isVerifyEmail &&
          verifyFormData.memberId &&
          verifyFormData.memberPw &&
          verifyFormData.memberPwReInput &&
          verifyFormData.registNumber &&
          checkId ? (
            <Button
              variant='contained'
              fullWidth
              sx={{height: '100px'}}
              onClick={() => {
                dispatch(CallPostSignupCompanyAPI()).then((result) => {
                  if (result) {
                    alert('??????????????? ?????????????????????.');
                    return navigate('/');
                  }
                  alert('??????????????? ?????????????????????.');
                });
              }}
            >
              ????????????
            </Button>
          ) : (
            <Button
              variant='contained'
              fullWidth
              disabled
              sx={{height: '100px'}}
            >
              ?????????????????? ????????? ?????????
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
