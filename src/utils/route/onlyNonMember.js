import {redirect} from 'react-router-dom';
import getToken from '../auth/getToken';

export default function onlyNonMember() {
  return getToken() ? redirect('/') : null;
}
