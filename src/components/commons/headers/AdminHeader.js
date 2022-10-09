import {Link} from 'react-router-dom';
import {Avatar, Box, Container, Divider, Grid, Typography} from '@mui/material';
import * as React from 'react';
import LogoutButton from '../../buttons/LogoutButton.js/LogoutButton';
import getToken from '../../../utils/auths/getToken';

const menuList = [
  {code: 1, menuName: '개인 회원 관리', menuUrl: '/admin'},
  {code: 2, menuName: '기업 회원 관리', menuUrl: '/admin'},
  {code: 3, menuName: '공통', menuUrl: '/admin/common'}
];

const personalInnerMenuList = [
  {code: 1, menuName: '이력서 조회', menuUrl: '/admin/resume'},
  {code: 2, menuName: '포트폴리오 조회', menuUrl: '/admin/'},
  {code: 3, menuName: '인재풀 조회', menuUrl: '/admin/'},
  {code: 4, menuName: '선택 항목 편집', menuUrl: '/admin/'}
];

const companyInnerMenuList = [
  {code: 1, menuName: '기업 관리', menuUrl: '/admin/member'},
  {code: 2, menuName: '구직 공고 관리', menuUrl: '/admin/jobsearch'},
  {code: 3, menuName: '상품 관리', menuUrl: '/admin/'},
  {code: 4, menuName: '결제 관리', menuUrl: '/admin/'}
];

const commonInnerMenuList = [
  {code: 1, menuName: 'CS 관리', menuUrl: '/admin/'},
  {code: 2, menuName: '회원 관리', menuUrl: '/admin/'},
  {code: 3, menuName: '매칭 조회', menuUrl: '/admin/'},
  {code: 4, menuName: '약관 관리', menuUrl: '/admin/'}
];

const innerMenuList = [
  {innerCode: 1, menuList: personalInnerMenuList},
  {innerCode: 2, menuList: companyInnerMenuList},
  {innerCode: 3, menuList: commonInnerMenuList}
];

let innerMenu = [];

export default function AdminHeader() {
  const [pageState, setPageState] = React.useState(1);

  return (
    <>
      <Box bgcolor='#4199E1' display='flex' alignItems='center' padding={2}>
        <Container disableGutters>
          <Grid container justifyContent='space-between' rowGap={5}>
            <Grid
              item
              display='flex'
              alignItems='center'
              component={Link}
              to='/'
              underline='none'
            >
              <Avatar
                variant='rounded'
                src='/logo/adminLogo.svg'
                alt='logo'
                sx={{width: 50, height: 50}}
              ></Avatar>
              <Typography variant='h4' color='white' marginLeft={2}>
                INIT{' '}
                <Typography component='span' color='yellow'>
                  관리자 모드
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              display='flex'
              alignItems='center'
              justifyContent='space-around'
            >
              {menuList.map((menu) => (
                <Link
                  key={menu.code}
                  to={`${menu.menuUrl}`}
                  style={{color: 'white'}}
                  underline='none'
                  fontWeight='bold'
                  onClick={() => {
                    setPageState(menu.code);
                    console.log(pageState);
                  }}
                >
                  {menu.menuName}
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm='auto' display='flex' alignItems='center'>
              <Typography>
                어서오세요,{' '}
                <Typography component='span' color='yellow'>
                  {getToken().memberName}
                </Typography>
                님
              </Typography>
              <LogoutButton />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* inner header */}
      <Box bgcolor='white' display='flex' alignItems='center' padding={2}>
        <Container disableGutters>
          <Grid
            item
            xs={12}
            sm={7}
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap='50px'
            style={{backgroundColor: 'white'}}
          >
            {innerMenuList
              .filter((menu) => menu.innerCode === pageState)
              .map((menu) => {
                return menu.menuList.map((menu) => (
                  <Link
                    key={menu.code}
                    to={`${menu.menuUrl}`}
                    style={{color: '#B5B5B5'}}
                    underline='none'
                    fontWeight='bold'
                  >
                    {menu.menuName}
                  </Link>
                ));
              })}
          </Grid>
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
