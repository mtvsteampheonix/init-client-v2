import {Link} from 'react-router-dom';
import {Avatar, Box, Container, Divider, Grid, Typography} from '@mui/material';
import LogoutButton from './../../buttons/LogoutButton.js/LogoutButton';
import getToken from './../../../utils/auths/getToken';

const menuList = [
  {code: 1, menuName: '채용공고', menuUrl: '/jobsearch'},
  {code: 2, menuName: '기업조회', menuUrl: '/company'},
  {code: 3, menuName: '커리어', menuUrl: '/scout'},
  {code: 4, menuName: '프로필 관리', menuUrl: '/resume'},
  {code: 5, menuName: '마이페이지', menuUrl: '/mypage'}
];

export default function PersonalHeader() {
  return (
    <>
      <Box display='flex' alignItems='center' padding={2}>
        <Container disableGutters>
          <Grid container justifyContent='space-between' rowGap={5}>
            <Grid
              item
              xs='auto'
              display='flex'
              alignItems='center'
              component={Link}
              to='/'
              underline='none'
            >
              <Avatar
                variant='rounded'
                src='/logo/logo.svg'
                alt='logo'
                sx={{width: 50, height: 50}}
              ></Avatar>
              <Typography variant='h4' color='primary' marginLeft={2}>
                INIT
                <Typography component='span'>개인 회원</Typography>
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
                  underline='none'
                  fontWeight='bold'
                >
                  {menu.menuName}
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm='auto' display='flex' alignItems='center'>
              <Typography>
                어서오세요,{' '}
                <Typography component='span' color='primary'>
                  {getToken().memberName}
                </Typography>
                님
              </Typography>
              <LogoutButton />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
