import {Link} from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';

const menuList = [
  {code: 1, menuName: '채용공고', menuUrl: '/jobsearch'},
  {code: 2, menuName: '기업조회', menuUrl: '/auths/login'},
  {code: 3, menuName: '커리어', menuUrl: '/auths/login'},
  {code: 4, menuName: '프로필 관리', menuUrl: '/auths/login'},
  {code: 5, menuName: '마이페이지', menuUrl: '/auths/login'}
];

export default function NonMemberHeader() {
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
              <Button
                component={Link}
                to='/auths/login'
                variant='contained'
                size='large'
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
