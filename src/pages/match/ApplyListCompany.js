import styled from 'styled-components';
import Button from '@mui/material/button';
import {useNavigate, useParams} from 'react-router-dom';
import {
  TextField,
  Grid,
  Checkbox,
  Typography,
  FormControlLabel
} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  callApplyListCompanyAPI,
  callNoticeFailureAPI
} from '../../apis/match/MatchAPICalls';
import Skeleton from '@mui/material/Skeleton';

const ApplyPageHeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 130px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

function ApplyListCompany() {
  const noticeCode = 999;
  const dispatch = useDispatch();
  const applyListCompany = useSelector(
    (state) => state.applyListCompanyReducer
  );
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [array, setArray] = React.useState([]);
  const [checkFilter, setCheckFilter] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setSearchValue({...searchValue, page: (value - 1) * 10});
  };
  const [searchValue, setSearchValue] = React.useState({
    noticeCode: noticeCode,
    page: page - 1,
    criteria: '',
    content: '',
    isAccepted: ''
  });
  const checkHandler = (e) => {
    if (e.currentTarget.checked) {
      setArray([...array, e.target.value]);
    } else {
      setArray(array.filter((button) => button !== e.target.value));
    }
  };
  const getCriteria = (e) => {
    setSearchValue({...searchValue, criteria: e.target.value});
  };

  const getContent = (e) => {
    setSearchValue({...searchValue, content: e.target.value});
  };
  React.useEffect(() => {
    dispatch(callApplyListCompanyAPI(searchValue, array));
  }, [checkFilter, page, array, loading]);
  return (
    <>
      {/* 헤더 부분 입니다. */}
      <ApplyPageHeaderComponent>
        <Title>공고 지원자 조회</Title>
        <FormGroup>
          <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>이름, 제목</InputLabel>
              <Select
                style={{marginTop: '8px'}}
                size='small'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                onChange={getCriteria}
              >
                <MenuItem value={'name'}>이름</MenuItem>
                <MenuItem value={'title'}>제목</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            multiline={false}
            id='outlined-helperText'
            label='검색'
            InputProps={{
              sx: {height: '40px', marginTop: '8px'}
            }}
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                setCheckFilter(!checkFilter);
              }
            }}
            onChange={getContent}
          />
          <ButtonGroup>
            <Button
              style={{width: '130px', height: '40px', marginTop: '8px'}}
              variant='outlined'
              onClick={() => {
                setCheckFilter(!checkFilter);
              }}
            >
              검색
            </Button>
          </ButtonGroup>
        </FormGroup>
      </ApplyPageHeaderComponent>
      <Grid container borderBottom='1px solid black'>
        <Grid item xs={5}>
          <Typography fontSize='28px'>{applyListCompany.noticeCode}</Typography>
        </Grid>
        <Grid item xs={4} textAlign='right'>
          <FormControlLabel
            control={<Checkbox />}
            label='신입'
            value='newcomer'
            onChange={(e) => {
              checkHandler(e);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            value='threeYears'
            label='경력 3년이상'
            onChange={(e) => {
              checkHandler(e);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label='응답대기'
            value='null'
            onClick={(e) => {
              if (e.target.checked) {
                setSearchValue({...searchValue, isAccepted: null});
                setCheckFilter(!checkFilter);
              } else {
                setSearchValue({...searchValue, isAccepted: ''});
                setCheckFilter(!checkFilter);
              }
            }}
          />
        </Grid>
        <Grid item xs={3} textAlign='right'>
          <Button
            style={{
              width: '130px',
              height: '40px',
              marginRight: '20px'
            }}
            variant='outlined'
            onClick={() => {
              navigate('/mypage/write-proposal?applicationCode=' + checked);
            }}
          >
            합격
          </Button>
          <Button
            style={{width: '130px', height: '40px'}}
            variant='outlined'
            color='error'
            onClick={async () => {
              const checkMessage = window.confirm('불합격 처리 하시겠습니까?');
              if (checkMessage) {
                setLoading(true);
                const result = await callNoticeFailureAPI(noticeCode, checked);
                setLoading(false);
              }
            }}
          >
            불합격
          </Button>
        </Grid>
      </Grid>
      {/* 바디 부분 입니다. */}

      {loading
        ? applyListCompany.map((skeleton) => (
            <Box>
              <Typography component='div' key='h2' variant='h2'>
                <Skeleton />
              </Typography>
            </Box>
          ))
        : applyListCompany.map((apply, index) => {
            return (
              <Grid
                key={index}
                container
                paddingLeft={3}
                paddingTop={1.5}
                height='55px'
              >
                <Grid item xs={0.5}>
                  <Checkbox
                    onClick={handleToggle(apply.applicationCode)}
                    edge='start'
                    checked={checked.indexOf(apply.applicationCode) !== -1}
                    tabIndex={-1}
                    disableRipple
                    value={apply.applicationCode}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  onClick={() => {
                    console.log(checked);
                    navigate(
                      '/mypage/apply-list/detail?applicationCode=' +
                        apply.applicationCode +
                        '&noticeCode=' +
                        noticeCode
                    );
                  }}
                >
                  <Typography fontSize='26px'>{apply.resumeTitle}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography fontSize='20px' marginTop='5px'>
                    {apply.personalName}
                  </Typography>
                </Grid>
                <Grid item xs={1} marginTop='9px'>
                  <Typography fontSize='12px'>
                    {apply.applicationDate}
                  </Typography>
                </Grid>
                <Grid item xs={1.5} textAlign='center'>
                  {apply.isAccepted === null ? (
                    <LoadingButton
                      loading={true}
                      loadingPosition='start'
                      startIcon={<SaveIcon />}
                      variant='outlined'
                    >
                      응답대기
                    </LoadingButton>
                  ) : apply.isAccepted === 'N' ? (
                    <Button
                      sx={{width: '100px'}}
                      variant='outlined'
                      color='error'
                    >
                      불합격처리
                    </Button>
                  ) : (
                    <Button sx={{width: '100px'}} variant='outlined'>
                      합격처리
                    </Button>
                  )}
                </Grid>
              </Grid>
            );
          })}
      <Stack spacing={2} sx={{alignItems: 'center'}}>
        <Typography>Page: {page}</Typography>
        <Pagination
          sx={{textAlign: 'center'}}
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}

export default ApplyListCompany;
