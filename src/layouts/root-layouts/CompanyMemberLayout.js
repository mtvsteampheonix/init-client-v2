import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import CommonFooter from './../../components/commons/footers/CommonFooter';
import CompanyHeader from './../../components/commons/headers/CompanyHeader';
export default function CompanyMemberLayout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <CompanyHeader />
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <Outlet />
        </Container>
        <CommonFooter />
      </Box>
    </>
  );
}
