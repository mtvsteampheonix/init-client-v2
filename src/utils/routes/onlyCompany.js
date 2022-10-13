import {redirect} from 'react-router-dom';
import getToken from '../auths/getToken';

export default function onlyCompany() {
  return getToken().auths === 'ROLE_COMPANY' ? null : redirect('/');
}
