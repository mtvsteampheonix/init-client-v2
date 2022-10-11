import {redirect} from 'react-router-dom';
import getToken from './../auths/getToken';

export default function onlyPersonal() {
  return getToken()?.auths === 'ROLE_PERSONAL' ? null : redirect('/');
}
