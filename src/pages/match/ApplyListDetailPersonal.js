import {Grid, Typography, Button, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callApplyListDetailPersonalAPI} from '../../apis/match/MatchAPICalls';
import SaveIcon from '@mui/icons-material/Save';
import getToken from './../../utils/auths/getToken';

function ApplyListDetailPersonal() {
  const recruitInfo = useSelector(
    (state) => state.applyListDetailPersonalReducer
  );
  const noticeCode = useParams().noticeCode;
  const memberCode = getToken().memberCode;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callApplyListDetailPersonalAPI(noticeCode, memberCode));
  }, []);

  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
      >
        <Grid item xs={3} marginBottom='5px' gap='20px'>
          {recruitInfo.isAccepted === null ? (
            <LoadingButton
              sx={{width: '100px'}}
              loading={true}
              loadingPosition='start'
              variant='outlined'
              startIcon={<SaveIcon />}
            >
              진행중
            </LoadingButton>
          ) : recruitInfo.isAccepted === 'N' ? (
            <Button
              sx={{width: '100px', backgroundColor: '#ff0000', color: 'white'}}
            >
              불합격
            </Button>
          ) : (
            <Button
              sx={{width: '100px', backgroundColor: '#4199e1', color: 'white'}}
              variant='outlined'
            >
              수락
            </Button>
          )}
          <Link sx={{textDecoration: 'none'}}></Link>
        </Grid>
        <Grid item xs={9} textAlign='right' marginBottom='-5px'>
          {/* <img src={recruitDetails.companyImage} width='120px' height='120px' /> */}
        </Grid>
      </Grid>
      <Grid container marginBottom='40px'>
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            기업이름
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitInfo.comName}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            공고제목
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitInfo.title}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            홈페이지
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitInfo.comUrl}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            자기소개서 항목
          </Typography>
        </Grid>
        <Grid item xs={9.5} display='flex'>
          {recruitInfo?.selfIntroductionDTOList.map((category, index) => {
            if (recruitInfo.selfIntroductionDTOList.length === index + 1) {
              return (
                <Typography marginLeft='10px' fontSize='30px'>
                  {category.selfIntroductionCategory}
                </Typography>
              );
            } else {
              return (
                <Typography marginLeft='10px' fontSize='30px'>
                  {category.selfIntroductionCategory}
                  {' / '}
                </Typography>
              );
            }
          })}
        </Grid>
        <Grid item xs={12} />
      </Grid>

      <Grid container>
        <Grid item xs={3.1}>
          <Typography borderLeft='4px solid #4199e1' sx={{borderRadius: '5px'}}>
            <Typography marginLeft='10px' fontSize='30px'>
              지원 이력서
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px'>
                {recruitInfo.resumeTitle}
              </Typography>
            </Grid>
            <Grid item xs={1} marginTop='23px'>
              {/* <img
                src={recruitDetails.resumeImage}
                width='120px'
                height='120px'
              /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop='20px' />
        <Grid item xs={3.1}>
          <Typography borderLeft='4px solid #4199e1' sx={{borderRadius: '5px'}}>
            <Typography marginLeft='10px' fontSize='30px'>
              지원 포트폴리오
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px' marginTop='30px'>
                불사조
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop='20px' />
        <Grid item xs={3.1}>
          <Typography
            marginLeft='0px'
            fontSize='30px'
            borderLeft='4px solid #4199e1'
            sx={{borderRadius: '5px'}}
          >
            <Typography fontSize='30px' marginLeft='10px'>
              지원 일자
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px' marginTop='30px'>
                {recruitInfo.applicationDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop='200px' />
        <Grid item xs={12} textAlign='center'>
          <Button
            onClick={() => {
              navigate('/mypage/apply-list');
            }}
            sx={{width: '200px', marginLeft: '20px', height: '50px'}}
            variant='outlined'
          >
            확인
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ApplyListDetailPersonal;
