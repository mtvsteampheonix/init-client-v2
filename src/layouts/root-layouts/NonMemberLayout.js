import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import CommonFooter from './../../components/commons/footers/CommonFooter';
import NonMemberHeader from './../../components/commons/headers/NonMemberHeader';
export default function NonMemberLayout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <NonMemberHeader />
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
