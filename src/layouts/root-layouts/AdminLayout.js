import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import AdminHeader from './../../components/commons/headers/AdminHeader';
import AdminFooter from '../../components/commons/footers/AdminFooter';
export default function AdminLayout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <AdminHeader />
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <Outlet />
        </Container>
        <AdminFooter />
      </Box>
    </>
  );
}
