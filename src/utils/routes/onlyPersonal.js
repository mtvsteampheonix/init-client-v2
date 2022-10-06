import {redirect} from 'react-router-dom';
import getToken from '../auth/getToken';

export default function onlyPersonal() {
  return getToken() === 'ROLE_PERSONAL' ? null : redirect('/');
}
