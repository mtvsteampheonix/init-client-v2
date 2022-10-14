import {Grid, Paper, Typography, Button} from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from 'react-redux';
import {
  callApplyListDetailCompanyAPI,
  callNoticeFailureAPI
} from '../../apis/match/MatchAPICalls';

function ApplyListDetailCompany() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const applicationCode = searchParams.get('applicationCode');
  const noticeCode = searchParams.get('noticeCode');
  const applyListDetailInfo = useSelector(
    (state) => state.applyListDetailCompanyReducer
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(callApplyListDetailCompanyAPI(applicationCode));
  }, []);
  return loading ? (
    <Box>
      <Typography component='div' key='h2' variant='h2'>
        <Skeleton />
      </Typography>
      <Typography component='div' key='h2' variant='h2'>
        <Skeleton />
      </Typography>
      <Typography component='div' key='h2' variant='h2'>
        <Skeleton />
      </Typography>
      <Typography component='div' key='h2' variant='h2'>
        <Skeleton />
      </Typography>
      <Typography component='div' key='h2' variant='h2'>
        <Skeleton />
      </Typography>
      <Skeleton
        variant='rectangular'
        width={1153}
        height={200}
        sx={{marginBottom: '20px'}}
      />
      <Skeleton
        variant='rectangular'
        width={1153}
        height={200}
        sx={{marginBottom: '20px'}}
      />
      <Skeleton
        variant='rectangular'
        width={1153}
        height={200}
        sx={{marginBottom: '20px'}}
      />
    </Box>
  ) : (
    <>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={10} marginLeft={3.6} marginTop={3}>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}이력서 제목
            </Typography>
            <Typography fontSize='30px'>
              {applyListDetailInfo?.resumeTitle}
            </Typography>
          </Grid>
          {/* <Grid item xs={1.7} marginLewsft='4px'>
            <img height='150px' src={resumeInfo.image} />
          </Grid> */}
          <Grid item xs={12} marginLeft={3.6} marginBottom='10px'>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}이름
            </Typography>
            <Typography fontSize='30px'>
              {applyListDetailInfo?.personalName}
            </Typography>
          </Grid>
          <Grid item xs={12} marginLeft={3.6} marginBottom='10px'>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}희망직무
            </Typography>
            {applyListDetailInfo?.positionDivDTO?.map((item, index) => {
              if (index === applyListDetailInfo?.positionDivDTO.length - 1) {
                return (
                  <Typography component='span' fontSize='30px'>
                    {item.rsmValue}
                  </Typography>
                );
              } else {
                <Typography component='span' fontSize='30px'>
                  {item.rsmValue} /{' '}
                </Typography>;
              }
            })}
          </Grid>
          <Grid item xs={12} marginLeft={3.6} marginBottom='10px'>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}보유 기술
            </Typography>
            <Typography fontSize='30px'>
              {applyListDetailInfo?.choseTechDTO?.map((skill, index) => {
                if (applyListDetailInfo?.choseTechDTO.length - 1 === index) {
                  return (
                    <Typography component='span' fontSize='30px'>
                      {skill.techValue}
                    </Typography>
                  );
                } else {
                  return (
                    <Typography component='span' fontSize='30px'>
                      {skill.techValue} /{' '}
                    </Typography>
                  );
                }
              })}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            marginLeft={3.6}
            marginBottom='10px'
            marginRight={3}
            marginTop='10px'
          >
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}자기소개서
            </Typography>

            {applyListDetailInfo?.selfIntroductionAnsweredDTO?.map(
              (introduction) => (
                <>
                  <Typography
                    textAlign='right'
                    marginRight={1.3}
                    fontSize='30px'
                  >
                    {introduction?.introductionCategory}
                  </Typography>
                  <Typography sx={{height: '100px'}}>
                    {introduction?.answerContent}
                  </Typography>
                </>
              )
            )}
          </Grid>
          <Grid
            item
            xs={12}
            textAlign='right'
            marginRight='35px'
            marginBottom='20px'
          >
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
                  '/mypage/interview-suggestion?noticeCode=' +
                    noticeCode +
                    '&applicationCode=' +
                    applicationCode +
                    '&division=apply'
                );
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
                const checkMessage =
                  window.confirm('불합격 처리 하시겠습니까?');
                if (checkMessage) {
                  setLoading(true);
                  const result = await callNoticeFailureAPI(noticeCode, [
                    applicationCode
                  ]);
                  alert('완료 되었습니다.');
                  navigate('/mypage/apply-list/' + noticeCode);
                }
              }}
            >
              거절
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ApplyListDetailCompany;
