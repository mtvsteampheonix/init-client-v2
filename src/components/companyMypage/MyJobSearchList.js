import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box} from '@mui/system';
import {useNavigate} from 'react-router-dom';
import setCookie from '../../utils/auths/setCookie';
import Cookies from 'js-cookie';
import {useSelector, useDispatch} from 'react-redux';
import {SET_IDS} from '../../modules/jobsearch/MyNoticeIdModule';

const columns = [
  {field: 'noticeCodePk', headerName: 'ID', width: 70},
  {field: 'comName', headerName: '기업명', width: 200},
  {field: 'title', headerName: '구직공고명', width: 300},
  {field: 'isClose', headerName: '게시상태', width: 130}
  // {field: 'isClose', headerName: '관리', width: 130}
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
];

// const getRowId = (params) => params.id;

export default function MyJobSearchList() {
  const ids = useSelector((state) => state.MyNoticeIdReducer);
  const dispatch = useDispatch();
  /*api */
  const [noticeList, setNoticeList] = React.useState([]);
  const [noticeCode, setNoticeCode] = React.useState();
  // console.log('hh');
  // console.log(noticeCode);
  // const [searchValue, setSearchValue] = React.useState('');

  const navigate = useNavigate();
  /*목록 불러오는 get요청, useState*/

  React.useEffect(() => {
    fetch(`http://localhost:8080/jobsearchs/my`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + Cookies.get('Bearer')
      }
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setNoticeList(result.data);
        return result.data;
      })
      .then((list) => {
        let tmp = [];
        list.map((item) => {
          tmp.push(item.noticeCodePk);
        });
        setNoticeCode(tmp);
      });
  }, []);
  // console.log(noticeCode);
  /* api */

  // const navigate = useNavigate();

  // const toDetails = () => {
  //   navigate('../details-jobsearch');
  // };

  const selectedRow = (params) => {
    // console.log(params);
    dispatch({type: SET_IDS, payload: params});
  };

  // console.log('selectedRowDelete test');
  // console.log(ids);
  return (
    <>
      <Box style={{width: '100%'}}>
        <DataGrid
          getRowId={(noticeList, index) => {
            // setNoticeCode(noticeList.noticeCodePk);
            // console.log(noticeList.noticeCodePk);
            return noticeList.noticeCodePk;
          }}
          onRowClick={(row) => {
            navigate(`./${row.id}`, {
              state: {noticeCodePk: `${row.id}`}
            });
          }} //row클릭시 이벤트발생시키는 prop
          rows={noticeList}
          columns={columns}
          autoHeight={true}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection // 체크박스가 필요한 경우에 사용할것.
          onSelectionModelChange={selectedRow} //체크된상태다룰때
        />
      </Box>
    </>
  );
}
