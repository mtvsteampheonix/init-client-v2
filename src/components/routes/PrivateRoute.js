import {Route, Redirect} from 'react-router-dom';
import isLogin from '../../utils/auths/isLogin';

export default function PrivateRoute({
  component: Component,
  restricted,
  ...rest
}) {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? <Component {...props} /> : <Redirect to='/signin' />
        }
      />
    </>
  );
}
