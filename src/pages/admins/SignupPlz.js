import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {callGetSignupplzListAPI} from './../../apis/admins/AdminAPICalls';

const columnHeaderlist = [
  {id: 'memberId', align: 'center', label: '아이디', minWidth: 100},
  {id: 'memberName', align: 'center', label: '이름', minWidth: 100},
  {id: 'comName', align: 'center', label: '회사명', minWidth: 100},
  {id: 'signupDate', align: 'center', label: '가입일자', minWidth: 100},
  {
    id: 'registNumber',
    align: 'center',
    label: '사업자 등록번호',
    minWidth: 100
  },
  {id: 'email', align: 'center', label: '이메일', minWidth: 200},
  {id: 'seeDetail', align: 'center', label: '상세조회', minWidth: 200}
];

const StyledTableHeader = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

export default function Signupplz() {
  const signuplist = useSelector((state) => state.signupplzReducer);
  // const {company} = entMember;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callGetSignupplzListAPI());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Typography variant='h4'>기업회원 가입 승인요청 목록</Typography>
      <Paper
        sx={{
          marginTop: 5,
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <TableContainer sx={{maxHeight: 500, minHeight: 500}}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columnHeaderlist.map((column) => (
                  <StyledTableHeader
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth
                    }}
                  >
                    {column.label}
                  </StyledTableHeader>
                ))}
              </TableRow>
            </TableHead>

            {signuplist && (
              <TableBody>
                {signuplist
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={row.memberCodePk}
                      >
                        {columnHeaderlist.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === 'seeDetail' ? (
                                <Button
                                  component={Link}
                                  to={`${row.memberCodePk}`}
                                  variant='contained'
                                >
                                  상세조회
                                </Button>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component='div'
          count={signuplist?.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage='한페이지 리스트 개수'
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>
    </>
  );
}
