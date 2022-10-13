import Button from '@mui/material/button';
import {TextField, Grid, Typography, Paper} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {useNavigate, useParams} from 'react-router-dom';

function WriteProposal() {
  const {resumeCode} = useParams();
  const navigate = useNavigate();
  const suggestionInfo = {
    companyName: '인텔리안테크',
    companyAddress: '경기도 성남시 수정구 시흥동 285-2 103호',
    companyURL: 'https://mtvs.kr/user/main',
    companyEmp: 200,
    companyImage: '/companyImage.jpg',
    phone: '010-1234-5676'
  };
  return (
    <>
      <Grid container textAlign='center'>
        <Grid item xs={12} textAlign='center'>
          <img src={suggestionInfo.companyImage} width='300px' />
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
          <Typography fontSize='30px'>{suggestionInfo.companyName}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>기업주소</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyAddress}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사홈페이지</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyURL}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>사원수</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyEmp}명
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>면접일자선택</Typography>
        </Grid>
        <Grid item xs={10} textAlign='right'>
          <input
            type='date'
            style={{
              height: '32px',
              width: '130px',
              fontSize: '20px',
              marginRight: '10px'
            }}
          ></input>
        </Grid>
        <Grid item xs={12} marginBottom='20px'>
          <Paper elevation={3}>
            <TextField
              multiline
              minRows={30}
              value={suggestionInfo.description}
              fullWidth
            ></TextField>
          </Paper>
        </Grid>
        <Grid item xs={12} textAlign='right' marginBottom='15px'>
          <Typography
            fontSize='20px'
            borderRight='4px solid #4199e1'
            sx={{borderRadius: '5px'}}
          >
            채용 담당자 연락처 : {suggestionInfo.phone}
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
              onClick={() => navigate('/mypage/ent/apply-list')}
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
              onClick={() =>
                navigate('/mypage/ent/apply-list/details/' + resumeCode)
              }
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
              onClick={() => {
                const checkOffer = window.confirm('면접 제안 하시겠습니까?');
                if (checkOffer) {
                  alert('완료 되었습니다.');
                  navigate('/mypage/ent/apply-list');
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

export default WriteProposal;
