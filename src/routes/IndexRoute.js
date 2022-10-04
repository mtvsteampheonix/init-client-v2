import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Test from './../pages/Test';
import IndexLayout from '../layouts/root-layouts/IndexLayout';
import Login from './../pages/auth/Login';
import getToken from './../utils/auth/getToken';

export default function IndexRoute() {
  const actionAuths = () => {
    return getToken() ? null : redirect('/login');
  };
  const actionPublic = () => {
    console.log('Public');
    console.log();
    // return isLogin() ? redirect()
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route path='test' element={<Test />} />
          <Route path='auths'>
            <Route path='login' element={<Login />} />
          </Route>
        </Route>
      </>
    )
  );

  // return <AdminRoute />;

  return <RouterProvider router={router} />;
}
