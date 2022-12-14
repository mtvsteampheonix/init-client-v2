import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/button';
import {Typography, Box, Grid} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import {TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {callApplyListPersonalAPI} from '../../apis/match/MatchAPICalls';
import {useDispatch, useSelector} from 'react-redux';
import getToken from './../../utils/auths/getToken';

const ApplyPageHeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
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

function ApplyListPersonal() {
  const [checkFilter, setCheckFilter] = React.useState(false);
  const dispatch = useDispatch();
  const applyList = useSelector((state) => state.applyListPersonalReducer);
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setSearchValue({...searchValue, page: (value - 1) * 10});
  };
  const [searchValue, setSearchValue] = React.useState({
    memberCode: getToken().memberCode,
    page: page - 1,
    criteria: '',
    content: ''
  });
  const getCriteria = (e) => {
    setSearchValue({...searchValue, criteria: e.target.value});
  };

  const getContent = (e) => {
    setSearchValue({...searchValue, content: e.target.value});
  };
  //   const [age, setAge] = React.useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  React.useEffect(() => {
    dispatch(callApplyListPersonalAPI(searchValue));
  }, [checkFilter, page]);

  const [checked, setChecked] = React.useState([0]);

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

  return (
    <>
      {/* ???????????????. */}
      <ApplyPageHeaderComponent>
        <Title>?????? ??????</Title>
        <FormGroup>
          <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>??????, ??????</InputLabel>
              <Select
                style={{marginTop: '8px'}}
                size='small'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value='asdasd'
                label='process'
                onChange={getCriteria}
              >
                <MenuItem value={'title'}>????????????</MenuItem>
                <MenuItem value={'comName'}>????????????</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            multiline={false}
            id='outlined-helperText'
            label='??????'
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
              ??????
            </Button>
          </ButtonGroup>
        </FormGroup>
      </ApplyPageHeaderComponent>
      {/* ???????????????. */}
      {applyList.map((companyInfo, index) => (
        <Grid container paddingLeft={3} paddingTop={1.5} key={index}>
          <Grid
            item
            xs={1.4}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Typography variant='h6'>{companyInfo.comName}</Typography>
          </Grid>
          <Grid
            item
            xs={7.7}
            onClick={() => {
              navigate('/mypage/apply-list/detail/' + companyInfo.noticeCode);
            }}
          >
            <Grid container flexDirection='column'>
              <Grid item>
                <Typography variant='h4'>{companyInfo.title}</Typography>
              </Grid>
              <Grid item>
                {companyInfo.career} {companyInfo.education}{' '}
                {companyInfo.entLocation}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} paddingTop={5}>
            {companyInfo.postStartDate}
          </Grid>
          <Grid
            item
            xs={1.9}
            paddingTop={1.2}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {companyInfo.isAccepted == null ? (
              <LoadingButton
                sx={{width: '100px'}}
                loading={true}
                loadingPosition='start'
                startIcon={<SaveIcon />}
                variant='outlined'
              >
                ?????????
              </LoadingButton>
            ) : companyInfo.isAccepted == 'N' ? (
              <Button sx={{width: '100px'}} variant='outlined' color='error'>
                ?????????
              </Button>
            ) : (
              <Button sx={{width: '100px'}} variant='outlined'>
                ??????
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
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

export default ApplyListPersonal;
