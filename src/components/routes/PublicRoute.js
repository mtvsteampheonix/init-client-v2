import {Route, redirect} from 'react-router-dom';
import isLogin from '../../utils/auths/isLogin';

export default function PublicRoute({restricted, ...rest}) {
  return <>{isLogin() && restricted ? redirect('/') : <Route {...rest} />}</>;
}
