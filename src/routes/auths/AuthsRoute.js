import {Route} from 'react-router-dom';
import Login from '../../pages/auth/Login';
import onlyNonMember from '../../utils/route/onlyNonMember';

export default function AuthsRoute() {
  return (
    <>
      <Route path='login' loader={onlyNonMember} element={<Login />} />
    </>
  );
}
