import {Box, Container, Divider, Grid, Link} from '@mui/material';

const commonInnerMenuList = [
  {code: 1, menuName: 'CS 관리', menuUrl: '/admin/common'},
  {code: 2, menuName: '회원 관리', menuUrl: '/admin/common'},
  {code: 3, menuName: '매칭 조회', menuUrl: '/admin/common'},
  {code: 4, menuName: '약관 관리', menuUrl: '/admin/common'}
];

export default function CommonInnerMenu() {
  return (
    <>
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
            {commonInnerMenuList.map((menu) => (
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
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
