import {Route, redirect, Navigate} from 'react-router-dom';
import isLogin from '../../utils/auth/isLogin';

export default function PublicRoute({restricted, element, ...rest}) {
  // return <>{isLogin() && restricted ? redirect('/') : <Route {...rest} />}</>;
  // return isLogin() && redirect ? (
  //   <Navigate to='/' />
  // ) : (
  //   <Route {...rest} element={element} />
  // );
  return <Route element={<element />} />;
}
