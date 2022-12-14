import {redirect} from 'react-router-dom';
import getToken from './../auths/getToken';

export default function onlyAdmin() {
  return getToken()?.auths === 'ROLE_ADMIN' ? null : redirect('/');
}
