import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import logout from '../../../utils/auths/logout';

export default function LogoutButton() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          logout();
          window.location.href = '/';
        }}
        sx={{marginLeft: 1}}
      >
        로그아웃
      </Button>
    </>
  );
}
