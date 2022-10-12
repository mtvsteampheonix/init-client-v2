import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Test from './../pages/Test';
import IndexLayout from '../layouts/root-layouts/IndexLayout';
import AuthsRoute from './auths/AuthsRoute';
import onlyAdmin from './../utils/routes/onlyAdmin';
import onlyNonMember from '../utils/routes/onlyNonMember';
import PersonalMypage from './mypages/PersonalMypage';
import getToken from './../utils/auths/getToken';

export default function IndexRoute() {
  const MypageSwitch = () => {
    switch (getToken()?.auths) {
      case 'ROLE_PERSONAL':
        return (
          <Route
            loader={onlyAuths}
            element={<PersonalMypageLayout />}
            children={PersonalMypage()}
          />
        );
      case 'ROLE_COMPANY':
        return (
          <Route
            loader={onlyCompany}
            element={<CompanyMypageLayout />}
            children={CompanyMyPage()}
          />
        );

      default:
        return null;
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route index element={<Test />} />
          <Route path='auths' loader={onlyNonMember} children={AuthsRoute()} />
          {getToken()?.auths === 'ROLE_PERSONAL' ? PersonalMypage() : null}
          <Route path='test' loader={onlyAdmin} element={<Test />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
