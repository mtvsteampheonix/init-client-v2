import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate(0);
  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          navigate('/');
        }}
        sx={{marginLeft: 1}}
      >
        로그아웃
      </Button>
    </>
  );
}
