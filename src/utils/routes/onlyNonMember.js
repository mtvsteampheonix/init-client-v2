import {redirect} from 'react-router-dom';
import getToken from './../auths/getToken';

export default function onlyNonMember() {
  return getToken() ? redirect('/') : null;
}
