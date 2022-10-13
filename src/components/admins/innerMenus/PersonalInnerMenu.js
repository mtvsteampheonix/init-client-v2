import {Box, Container, Divider, Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const personalInnerMenuList = [
  {code: 1, menuName: '이력서 조회', menuUrl: '/admin/personal/resume'},
  {code: 2, menuName: '포트폴리오 조회', menuUrl: '/admin/personal'},
  {code: 3, menuName: '인재풀 조회', menuUrl: '/admin/personal'},
  {code: 4, menuName: '선택 항목 편집', menuUrl: '/admin/personal'}
];

export default function PersonalInnerMenu() {
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
            {personalInnerMenuList.map((menu) => (
              <Typography
                component={Link}
                key={menu.code}
                to={`${menu.menuUrl}`}
                underline='none'
                fontWeight='bold'
              >
                {menu.menuName}
              </Typography>
            ))}
          </Grid>
        </Container>
      </Box>
      <Divider sx={{width: '100%'}} />
    </>
  );
}
