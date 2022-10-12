import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MultipleSelectBox from '../../components/companyMypage/MultipleSelectBox';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';

export default function AddJobSearch() {
  /**/
  const location = useLocation();

  const noticeCodePk = location.state.noticeCodePk;
  console.log(`왜   안돼${location.state.noticeCodePk}`);
  const [details, setDetails] = React.useState({});

  React.useEffect(() => {
    console.log(`왜안돼${location.state.noticeCodePk}`);
    console.log(noticeCodePk);
    fetch(`http://localhost:8080/jobsearchs/${noticeCodePk}`)
      .then((response) => response.json())
      .then((result) => setDetails(result.data));
  }, []);
  /**/
  /*게시 alert*/
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = () => {
    setOpenPost(false);
  };
  /*게시일 선택 date picker*/
  /* datepicker */
  const [PostbeginDay, setPostBeginDay] = React.useState(
    dayjs('2014-08-18T21:11:54')
  );

  const handleChangePostBegin = (newValue) => {
    setPostBeginDay(newValue);
  };
  const [PostendDay, setPostEndDay] = React.useState(
    dayjs('2014-08-18T21:11:54')
  );

  const handleChangePostEnd = (newValue) => {
    setPostEndDay(newValue);
  };
  /* 모집게시일 datepicker */
  const [beginDay, setBeginDay] = React.useState(
    dayjs(details.recruitStartDate)
  );

  const handleChangeBegin = (newValue) => {
    setBeginDay(newValue);
  };
  const [endDay, setEndDay] = React.useState(dayjs(details.recruitEndDate));

  const handleChangeEnd = (newValue) => {
    setEndDay(newValue);
  };

  /*SELECT*/
  const [career, setCareer] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [employees, setEmployees] = React.useState('');
  const [education, setEducation] = React.useState('');

  const handleChangeCareer = (event) => {
    setCareer(event.target.value);
  };
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleChangeEmployees = (event) => {
    setEmployees(event.target.value);
  };
  const handleChangeEducation = (event) => {
    setEducation(event.target.value);
  };

  const skillList = ['java', 'python', 'C', 'spring', 'react', 'spring boot'];
  const jobList = [
    '자바개발자',
    '파이썬개발자',
    '리액트개발자',
    '백엔드',
    '프론트엔드'
  ];

  /*DIALOGALERT 수정*/

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  /*DIALOGALERT 삭제*/

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <Typography variant='h4'>MY구직공고수정</Typography>
      <Stack spacing={1}>
        <Typography variant='h7' fontWeight='bold'>
          상세정보작성
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label='모집 게시일'
            value={beginDay}
            onChange={handleChangeBegin}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label='모집 마감일'
            value={endDay}
            onChange={handleChangeEnd}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>경력</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={career}
              label='career'
              onChange={handleChangeCareer}
            >
              <MenuItem value={'무관'}>무관</MenuItem>
              <MenuItem value={'신입'}>신입</MenuItem>
              <MenuItem value={'1년차'}>1년차</MenuItem>
              <MenuItem value={'2년차'}>2년차</MenuItem>
              <MenuItem value={'3년차'}>3년차</MenuItem>
              <MenuItem value={'4년차'}>4년차</MenuItem>
              <MenuItem value={'5년차'}>5년차</MenuItem>
              <MenuItem value={'6년차'}>6년차</MenuItem>
              <MenuItem value={'7년차'}>7년차</MenuItem>
              <MenuItem value={'8년차'}>8년차</MenuItem>
              <MenuItem value={'9년차'}>9년차</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>연봉</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={salary}
              label='salary'
              onChange={handleChangeSalary}
            >
              <MenuItem value={'3,000 이상'}>3,000 이상</MenuItem>
              <MenuItem value={'3,500 이상'}>3,500 이상</MenuItem>
              <MenuItem value={'4,000 이상'}>4,000 이상</MenuItem>
              <MenuItem value={'4,500 이상'}>4,500 이상</MenuItem>
              <MenuItem value={'5,000 이상'}>5,000 이상</MenuItem>
              <MenuItem value={'5,500 이상'}>5,500 이상</MenuItem>
              <MenuItem value={'6,000 이상'}>6,000 이상</MenuItem>
              <MenuItem value={'6,500 이상'}>6,500 이상</MenuItem>
              <MenuItem value={'7,000 이상'}>7,000 이상</MenuItem>
              <MenuItem value={'7,500 이상'}>7,500 이상</MenuItem>
              <MenuItem value={'8,000 이상'}>8,000 이상</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>직원수</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={employees}
              label='employees'
              onChange={handleChangeEmployees}
            >
              <MenuItem value={'5명이상'}>5명 이상</MenuItem>
              <MenuItem value={'20명이상'}>20명 이상</MenuItem>
              <MenuItem value={'50명이상'}>50명 이상</MenuItem>
              <MenuItem value={'100명이상'}>100명 이상</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>학력</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={education}
              label='education'
              onChange={handleChangeEducation}
            >
              <MenuItem value={'무관'}>무관</MenuItem>
              <MenuItem value={'고졸'}>고졸</MenuItem>
              <MenuItem value={'대졸'}>대졸</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <MultipleSelectBox
          title='기술스택'
          list={skillList}
        ></MultipleSelectBox>
        <MultipleSelectBox title='직무' list={jobList}></MultipleSelectBox>

        <TextField
          fullWidth
          id='outlined-textarea'
          label='근무지 위치'
          multiline
          minRows={1}
          defaultValue={details.entLocation}
        />

        <TextField
          fullWidth
          id='outlined-textarea'
          label='복지사항'
          multiline
          minRows={5}
          InputProps={{sx: {height: '150px'}}}
          defaultValue={details.benefits}
        />
      </Stack>
      <Box>
        <Typography variant='h7' fontWeight='bold'>
          소개글
        </Typography>
        <TextField
          fullWidth
          margin='dense'
          required
          id='title'
          label='제목'
          defaultValue={`${details.title}`}
        />

        <TextField
          fullWidth
          id='outlined-textarea'
          label='내용'
          multiline
          minRows={8}
          InputProps={{sx: {height: '200px'}}}
          defaultValue={details.content}
        />

        <h3>자기소개서 항목</h3>
        <TextField
          fullWidth
          margin='dense'
          id='firstQuestion'
          label='자기소개서 1번 문항'
          defaultValue='기존 문항을 출력합니다.'
          placeholder='자기소개서 1번 문항을 입력해주세요.'
        />

        <TextField
          fullWidth
          margin='dense'
          id='secondQuestion'
          label='자기소개서 2번 문항'
          defaultValue='기존 문항을 출력합니다.'
          placeholder='자기소개서 2번 문항을 입력해주세요.'
        />

        <TextField
          fullWidth
          margin='dense'
          id='thirdQuestion'
          defaultValue='기존 문항을 출력합니다.'
          label='자기소개서 3번 문항'
          placeholder='자기소개서 3번 문항을 입력해주세요.'
        />

        {/* 화면 하단 버튼 설정 */}
        <Box style={{textAlign: 'right'}}>
          <Button variant='outlined' size='large' href='jobsearch'>
            목록
          </Button>
        </Box>
        <Box style={{textAlign: 'center'}}>
          <Button
            variant='contained'
            size='large'
            onClick={handleClickOpenEdit}
          >
            수정
          </Button>

          <Button
            variant='contained'
            color='success'
            size='large'
            onClick={handleClickOpenPost}
          >
            게시
          </Button>
          <Button
            variant='contained'
            size='large'
            onClick={handleClickOpenDelete}
            color='error'
          >
            삭제
          </Button>
        </Box>

        {/*Dialog 수정 */}
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby='alert-edit-title'
          aria-describedby='alert-edit-description'
        >
          <DialogTitle id='alert-edit-title'>
            {'구직공고작성'} {/*팝업창 메인에 출력할 문구*/}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-edit-description'>
              구직공고게시글을 수정하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleCloseEdit}>
              예
            </Button>
            <Button variant='outlined' onClick={handleCloseEdit}>
              아니요
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog 삭제 */}

        <Dialog
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby='alert-delete-title'
          aria-describedby='alert-delete-description'
        >
          <DialogTitle id='alert-delete-title'>
            {'구직공고작성'} {/*팝업창 메인에 출력할 문구*/}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-delete-description'>
              구직공고게시글을 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleCloseDelete}>
              예
            </Button>
            <Button variant='outlined' onClick={handleCloseDelete}>
              아니요
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* dialog 게시 */}

      <Dialog
        open={openPost}
        onClose={handleClosePost}
        aria-labelledby='alert-post-title'
        aria-describedby='alert-post-description'
      >
        <DialogTitle id='alert-post-title'>{'My구직공고 게시'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-post-description'>
            <Box>
              잔여시간 :{/*  게시일 선택 */}
              <Box margin={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label='모집 게시일'
                    value={PostbeginDay}
                    onChange={handleChangePostBegin}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DateTimePicker
                    label='모집 마감일'
                    value={PostendDay}
                    onChange={handleChangePostEnd}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              필요시간 :
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClosePost} size='large'>
            게시
          </Button>
          <Button variant='outlined' onClick={handleClosePost} size='large'>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
