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
import {callGetResumeAdminAPI} from '../../apis/resume/ResumeAPICalls';

const columnHeaderlist = [
  {id: 'title', align: 'center', label: '제목', minWidth: 100},
  {id: 'memberCode', align: 'center', label: '회원코드', minWidth: 100},
  {id: 'name', align: 'center', label: '이름', minWidth: 100},
  {id: 'gender', align: 'center', label: '성별', minWidth: 100},
  {id: 'address', align: 'center', label: '주소', minWidth: 150},
  {id: 'email', align: 'center', label: '이메일', minWidth: 150},
  {id: 'seeDetail', align: 'center', label: '상세조회', minWidth: 200}
];

const StyledTableHeader = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

export default function ResumeList() {
  const resumeList = useSelector(
    (state) => state.resumeCombineReducer.resumeAdminListReducer
  );
  // const {company} = entMember;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callGetResumeAdminAPI());
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
      <Typography variant='h4'>이력서 조회</Typography>
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

            {resumeList && (
              <TableBody>
                {resumeList
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
                                  to={`${row.resumeCode}`}
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
      </Paper>
    </>
  );
}
