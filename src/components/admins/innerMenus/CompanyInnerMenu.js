import {Box, Container, Divider, Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const companyInnerMenuList = [
  {code: 1, menuName: '기업회원 승인', menuUrl: '/admin/company/signupplz'},
  {code: 2, menuName: '기업 관리', menuUrl: '/admin/company'},
  {code: 3, menuName: '구직 공고 관리', menuUrl: '/admin/company/jobsearch'},
  {code: 4, menuName: '상품 관리', menuUrl: '/admin/company'},
  {code: 5, menuName: '결제 관리', menuUrl: '/admin/company'}
];

export default function CompanyInnerMenu() {
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
            {companyInnerMenuList.map((menu) => (
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
