import * as React from 'react';
import {Container} from '@mui/system';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
function Details() {
  const location = useLocation();

  const noticeCodePk = location.state.noticeCodePk;
  // const noticeCodePk = useParams();
  console.log(`왜 안돼${location.state.noticeCodePk}`);
  const [details, setDetails] = React.useState({});

  React.useEffect(async () => {
    console.log(`왜안돼${noticeCodePk}`);
    console.log(noticeCodePk);
    await fetch(
      `http://localhost:8080/jobsearchs/${location.state.noticeCodePk}`
    )
      .then((response) => response.json())
      .then((result) => setDetails(result.data));
  }, []);
  return (
    <Container fixed>
      {/* 기업명 */}
      <h1>기업명 {details.comName}</h1>
      <hr />
      {/* 구직공고명 */}
      <h2>{details.title}</h2>
      <Box sx={{flexGrow: 1, margin: 2}}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item>
              {/* 모집게시일 */}
              <div>{details.recruitStartDate}</div>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              {/* 모집종료일 */}
              <div>{details.recruitEndDate}</div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Item>
              <div>지원자격</div>
              <ul>
                <li>경력: {details.career} </li>
                <li>학력: {details.education}</li>
                <li>기술스택: {details.skillSortationCode}</li>
              </ul>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div>근무조건</div>
              <ul>
                <li>직무: {details.jobSortationCode}</li>
                <li>연봉: {details.annualIncome}원</li>
                <li>근무지: {details.entLocation}</li>
              </ul>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div>기업정보</div>
              <ul>
                <li>사원수: {details.numEmp}명</li>
                <li>주소: {details.comAddress}</li>
                <li>홈페이지: {details.comUrl}</li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <hr />

      <div
        style={{
          witdh: 1200,
          height: 100,
          backgroundColor: 'primary'
        }}
      >
        <h3>복지</h3>
        <div>{details.benefits}</div>
      </div>
      <hr />
      <div
        style={{
          witdh: 1200,
          height: 100,
          backgroundColor: 'primary'
        }}
      >
        <h3>우대사항</h3>
        <div>{details.preference}</div>
      </div>
      <hr />
      <div
        style={{
          witdh: 1200,
          height: 300,
          backgroundColor: 'primary'
        }}
      >
        <h3>기업소개글</h3>
        <div>{details.content}</div>
      </div>

      <div style={{textAlign: 'center', margin: 10}}>
        <Button component={Link} variant='contained' to='./'>
          지원하기
        </Button>
        <Button component={Link} variant='outlined' to='/jobsearch'>
          목록
        </Button>
      </div>
    </Container>
  );
}

export default Details;
