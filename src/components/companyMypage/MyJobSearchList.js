import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box} from '@mui/system';
import {useNavigate} from 'react-router-dom';

const columns = [
  {field: 'noticeCodePk', headerName: 'ID', width: 70},
  {field: 'comName', headerName: '기업명', width: 200},
  {field: 'title', headerName: '구직공고명', width: 300},
  {field: 'isClose', headerName: '게시상태', width: 130}
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

const getRowId = (params) => params.id;

// const rows =

// const rows = [
//   {id: 1, 기업명: '메타버스아카데미', 게시상태: 'Y'},
//   {id: 2, 기업명: '메타버스아카데미', 게시상태: 'Y'},
//   {id: 3, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 4, 기업명: '메타버스아카데미', 게시상태: 'Y'},
//   {id: 5, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 6, 기업명: '메타버스아카데미', 게시상태: 'Y'},
//   {id: 7, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 8, 기업명: '메타버스아카데미', 게시상태: 'Y'},
//   {id: 9, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 10, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 11, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 12, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 13, 기업명: '메타버스아카데미', 게시상태: 'N'},
//   {id: 14, 기업명: '메타버스아카데미', 게시상태: 'N'}
// ];

export default function MyJobSearchList() {
  /*api */
  const [noticeList, setNoticeList] = React.useState([]);
  const [noticeCode, setNoticeCode] = React.useState();

  // const [searchValue, setSearchValue] = React.useState('');

  const navigate = useNavigate();
  /*목록 불러오는 get요청, useState*/

  React.useEffect(() => {
    fetch(`http://localhost:8080/jobsearchs?search`)
      .then((response) => response.json())
      .then((result) => setNoticeList(result.data));
  }, []);

  /* api */

  // const navigate = useNavigate();

  // const toDetails = () => {
  //   navigate('../details-jobsearch');
  // };

  // const selectedRowDelete = () =>{
  //   console.log('selectedRowDelete test')
  // }
  return (
    <>
      <Box style={{width: '100%'}}>
        <DataGrid
          getRowId={(noticeList) => {
            setNoticeCode(noticeList.noticeCodePk);
            console.log(noticeList.noticeCodePk);
            return noticeList.noticeCodePk;
          }}
          onRowClick={() => {
            navigate(`./${noticeCode}`, {
              state: {noticeCodePk: `${noticeCode}`}
            });
          }} //row클릭시 이벤트발생시키는 prop
          rows={noticeList}
          columns={columns}
          autoHeight={true}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection // 체크박스가 필요한 경우에 사용할것.
          //onSelectionModelChange={selectedRowDelete}//체크된상태다룰때
        />
      </Box>
    </>
  );
}
