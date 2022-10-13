import {Link} from 'react-router-dom';
import {Avatar, Box, Container, Divider, Grid, Typography} from '@mui/material';
import * as React from 'react';
import LogoutButton from '../../buttons/LogoutButton.js/LogoutButton';
import getToken from '../../../utils/auths/getToken';

const menuList = [
  {code: 1, menuName: '개인 회원 관리', menuUrl: '/admin/personal'},
  {code: 2, menuName: '기업 회원 관리', menuUrl: '/admin/company'},
  {code: 3, menuName: '공통', menuUrl: '/admin/common'}
];

export default function AdminHeader() {
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
    </>
  );
}
