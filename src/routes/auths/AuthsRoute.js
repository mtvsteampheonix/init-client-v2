import {Route} from 'react-router-dom';
import Login from '../../pages/auths/Login';
import onlyNonMember from '../../utils/route/onlyNonMember';

export default function AuthsRoute() {
  return (
    <>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={''} />
    </>
  );
}
