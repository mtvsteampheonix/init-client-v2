import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import CommonFooter from './../../components/commons/footers/CommonFooter';
import CompanyHeader from './../../components/commons/headers/CompanyHeader';
import {useEffect} from 'react';
import getToken from './../../utils/auths/getToken';
export default function CompanyMemberLayout() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <CompanyHeader />
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <main>
            <Outlet />
          </main>
        </Container>
        <CommonFooter />
      </Box>
    </>
  );
}
