import {redirect} from 'react-router-dom';
import getToken from '../auth/getToken';

export default function onlyAuths() {
  return getToken() ? null : redirect('/auths/login');
}
