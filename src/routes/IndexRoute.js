import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
  useLocation
} from 'react-router-dom';
import isLogin from '../utils/auth/isLogin';
import AdminRoute from './admin/AdminRoute';
import CompanyMemberRoute from './company-member/CompanyMemberRoute';
import NonMemberRoute from './non-member/NonMemberRoute';
import PersonalMemberRoute from './personal-member/PersonalMemberRoute';
import Test from './../pages/Test';
import IndexLayout from './../layouts/IndexLayout';

export default function IndexRoute() {
  const actionAuths = () => {
    return isLogin() ? null : redirect('/login');
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
          <Route path='/test' element={<Test />} />
        </Route>
      </>
    )
  );

  // return <AdminRoute />;

  return <RouterProvider router={router} />;
}
