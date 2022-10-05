import {redirect} from 'react-router-dom';
import getToken from '../auth/getToken';

export default function onlyCompany() {
  return getToken() === 'ROLE_COMPANY' ? null : redirect('/');
}
