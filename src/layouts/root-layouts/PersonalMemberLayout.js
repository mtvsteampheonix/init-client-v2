import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import AdminHeader from './../../components/commons/headers/AdminHeader';
import CommonFooter from './../../components/commons/footers/CommonFooter';
import PersonalHeader from './../../components/commons/headers/PersonalHeader';
export default function PersonalMemberLayout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <PersonalHeader />
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
