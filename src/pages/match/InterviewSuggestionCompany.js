import Button from '@mui/material/button';
import {TextField, Grid, Typography, Paper} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import getToken from './../../utils/auths/getToken';
import {
  callCompanyInformationAPI,
  callInsertInterviewSuggestionAPI
} from '../../apis/match/MatchAPICalls';
import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

function InterviewSuggestionCompany() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(dayjs());
  const noticeCode = searchParams.get('noticeCode');
  const applicationCode = searchParams.get('applicationCode');
  const division = searchParams.get('division');
  const dispatch = useDispatch();
  const companyInformation = useSelector(
    (state) => state.companyInformationReducer
  );
  const navigate = useNavigate();
  const [interviewSuggestionInfo, setInterviewSuggestionInfo] = React.useState({
    division: division,
    memberCode: getToken().memberCode,
    applicationCode: applicationCode,
    interviewDate: '',
    description: ''
  });
  React.useEffect(() => {
    dispatch(callCompanyInformationAPI(noticeCode));
  }, []);
  return (
    <>
      <Grid container textAlign='center'>
        <Grid item xs={12} textAlign='center'>
          {/* <img src={suggestionInfo.companyImage} width='300px' /> */}
        </Grid>
        <Grid
          item
          xs={12}
          borderBottom='1px solid #D5D5D5'
          marginBottom='20px'
        />
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사명</Typography>
        </Grid>
        <Grid item xs={10} marginBottom='20px'>
          <Typography fontSize='30px'>{companyInformation?.comName}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>기업주소</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {companyInformation?.comAddress}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사홈페이지</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {companyInformation?.comUrl}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>사원수</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {companyInformation?.numEmp}명
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>면접일자선택</Typography>
        </Grid>
        <Grid item xs={10} textAlign='right'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label='DateTimePicker'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} marginBottom='20px'>
          <Paper elevation={3}>
            <TextField
              multiline
              minRows={20}
              fullWidth
              onChange={(e) => {
                setInterviewSuggestionInfo({
                  ...interviewSuggestionInfo,
                  description: e.target.value
                });
              }}
            ></TextField>
          </Paper>
        </Grid>
        <Grid item xs={12} textAlign='right' marginBottom='15px'>
          <Typography
            fontSize='20px'
            borderRight='4px solid #4199e1'
            sx={{borderRadius: '5px'}}
          >
            채용 담당자 연락처 : {companyInformation?.phone}
          </Typography>
        </Grid>
        <Grid item xs={12} align='right' marginBottom='30px'>
          <Box>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px'
              }}
              variant='outlined'
              onClick={() => navigate('/mypage/apply-list/' + noticeCode)}
            >
              목록
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
              onClick={() => {
                navigate(
                  '/mypage/apply-list/detail?applicationCode=' +
                    applicationCode +
                    '&noticeCode=' +
                    noticeCode
                );
              }}
            >
              뒤로가기
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
              onClick={async () => {
                const checkOffer = await window.confirm(
                  '면접 제안 하시겠습니까?'
                );
                if (checkOffer) {
                  const result = await callInsertInterviewSuggestionAPI(
                    interviewSuggestionInfo,
                    value.format()
                  );
                  if (result.data === 'success') {
                    alert('완료 되었습니다.');
                    navigate('/mypage/apply-list/' + noticeCode);
                  }
                } else {
                  alert('취소 되었습니다.');
                }
              }}
            >
              면접 제안하기
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default InterviewSuggestionCompany;
