import * as React from 'react';
import Box from '@mui/material/Box';
import MyJobSearchList from '../../components/companyMypage/MyJobSearchList';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import {Stack} from '@mui/system';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Cookies from 'js-cookie';

export default function MyJobSearch() {
  const ids = useSelector((state) => state.MyNoticeIdReducer);

  /*게시 alert*/
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = async () => {
    /*구직공고 게시요청 자리*/
    console.log('here 구직공고 게시 ' + ids);
    const response = await fetch(`http://localhost:8080/jobsearchs`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify({
        noticeCode: ids[0],
        postStartDate: PostbeginDay,
        postEndDate: PostendDay
      })
    });

    console.log(response);
    window.location.reload();
    setOpenPost(false);
  };

  /*DIALOGALERT 삭제*/

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = async () => {
    /*삭제 요청 자리*/
    console.log('here is 삭제자리' + ids);
    const response = await fetch(`http://localhost:8080/jobsearchs`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      },
      body: JSON.stringify(ids)
    });
    window.location.reload();
    setOpenDelete(false);
  };

  /*게시일 선택 date picker*/
  /* datepicker */
  const [PostbeginDay, setPostBeginDay] = React.useState(dayjs().format());

  const handleChangePostBegin = (newValue) => {
    setPostBeginDay(newValue);
  };
  const [PostendDay, setPostEndDay] = React.useState(dayjs().format());

  const handleChangePostEnd = (newValue) => {
    setPostEndDay(newValue);
  };

  return (
    <Box>
      <Typography variant='h4'>MY구직공고</Typography>
      <MyJobSearchList />
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          component={Link}
          size='large'
          to='../regist-jobsearch'
          variant='contained'
        >
          작성
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
        <Button
          component={Link}
          variant='outlined'
          size='large'
          to={`../apply-list/${ids[0]}`}
        >
          관리
        </Button>
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
  );
}
