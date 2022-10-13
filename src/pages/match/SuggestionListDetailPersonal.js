import Button from '@mui/material/button';
import {TextField, Grid, Typography, Paper} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {
  callSuggestionListDetailPersonalAPI,
  callUpdateInterviewSuggestionResponseAPI
} from '../../apis/match/MatchAPICalls';

function SuggestionListDetailPersonal() {
  const dispatch = useDispatch();
  const interviewSuggestionCode = useParams().interviewSuggestionCode;
  const navigate = useNavigate();
  const interviewSuggestionInfo = useSelector(
    (state) => state.suggestionListDetailPersonalReducer
  );

  React.useEffect(() => {
    dispatch(callSuggestionListDetailPersonalAPI(interviewSuggestionCode));
  }, []);
  return (
    <>
      <Grid container textAlign='center'>
        <Grid item xs={12} textAlign='left'>
          <Typography
            fontSize='32px'
            paddingBottom='10px'
            borderBottom='1px solid black'
          >
            면접 제안서
          </Typography>
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
          <Typography fontSize='30px'>
            {interviewSuggestionInfo.comName}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>기업주소</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {interviewSuggestionInfo.comAddress}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사홈페이지</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {interviewSuggestionInfo.comUrl}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>사원수</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {interviewSuggestionInfo.numEmp}명
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>면접일자</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px'>
            {interviewSuggestionInfo.interviewDate}
          </Typography>
          {/* <FormControl
            sx={{m: 0.3, minWidth: 120, width: '200px'}}
            size='small'
          >
            <InputLabel id='demo-select-small'>날짜 선택</InputLabel>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              label='Age'
            >
              {suggestionInfo.SuggestionDate.map((date) => (
                <MenuItem value={date}>{date}</MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Grid>
        <Grid item xs={12} marginBottom='20px'>
          <Paper elevation={3}>
            <TextField
              multiline
              minRows={20}
              value={interviewSuggestionInfo.description}
              fullWidth
            ></TextField>
          </Paper>
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
              onClick={() => navigate('/mypage/suggestion-list')}
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
              onClick={async () => {
                const responseOffer = window.confirm('승인 하시겠습니까?');
                if (responseOffer) {
                  const result = await callUpdateInterviewSuggestionResponseAPI(
                    interviewSuggestionCode,
                    'Y'
                  );
                  if (result === 'success') {
                    alert('승인 완료하였습니다.');
                    navigate('/mypage/suggestion-list');
                  } else {
                    alert('승인 실패하였습니다. 관리자에게 문의해주세요.');
                  }
                } else {
                  return;
                }
              }}
            >
              승인
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
              color='error'
              onClick={async () => {
                const responseOffer = window.confirm('거절 하시겠습니까?');
                if (responseOffer) {
                  const result = await callUpdateInterviewSuggestionResponseAPI(
                    interviewSuggestionCode,
                    'N'
                  );
                  if (result === 'success') {
                    alert('승인 완료하였습니다.');
                    navigate('/mypage/suggestion-list');
                  } else {
                    alert('승인 실패하였습니다. 관리자에게 문의해주세요.');
                  }
                } else {
                  return;
                }
              }}
            >
              거절
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default SuggestionListDetailPersonal;
