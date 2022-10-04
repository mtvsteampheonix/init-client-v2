import {Route, useNavigate, redirect} from 'react-router-dom';
import isLogin from '../../utils/auth/isLogin';

export default function PrivateRoute({props}) {
  return <>{isLogin() ? <Route {...props} /> : redirect('/login')}</>;
}
