import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import PaginationControlled from './PaginationControlled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function BasicTable() {
  /**/
  const [noticeList, setNoticeList] = React.useState([]);
  const [noticeCode, setNoticeCode] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');
  const navigate = useNavigate();
  /*목록 불러오는 get요청, useState*/

  const toDetails = () => {
    navigate(`./${noticeCode}`, {state: {noticeCodePk: `${noticeCode}`}});
  };
  React.useEffect(() => {
    fetch(`http://localhost:8080/jobsearchs?search=${searchValue}`)
      .then((response) => response.json())
      .then((result) => setNoticeList(result.data));
  }, [searchValue]);

  return (
    <Box>
      {/* 검색창 시작*/}
      <Box
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <TextField
          size='small'
          fullWidth
          id='search'
          label='search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
          placeholder='검색할 키워드를 입력해주세요'
          variant='outlined'
          onChange={(e) => {
            console.log(e.target.value);
            setSearchValue(e.target.value);
            console.log(searchValue);
          }}
        />
      </Box>
      {/* 검색창 끝*/}
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>기업명</TableCell>
              <TableCell>구직공고명</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {noticeList && (
            <TableBody>
              {/* 출력하려는 배열 입력하는 곳 */}
              {noticeList.map((row) => (
                <TableRow
                  key={row.noticeCodePk}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    {row.noticeCodePk}
                  </TableCell>
                  <TableCell>{row.comName}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      onClick={() => {
                        console.log(`key는 ${row.noticeCodePk}입니다.`);
                        navigate(`./${row.noticeCodePk}`, {
                          state: {noticeCodePk: `${row.noticeCodePk}`}
                        });
                      }}
                    >
                      상 세 조 회
                    </Button>
                    <IconButton color='primary'>
                      {row.interest === 'N' ? <StarBorderIcon /> : <StarIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>

        <Container maxWidth='sm'>
          <PaginationControlled />
        </Container>
      </TableContainer>
    </Box>
  );
}
