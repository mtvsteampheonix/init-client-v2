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

import AuthsRoute from './auths/AuthsRoute';
import onlyAuths from '../utils/route/onlyAuths';
import onlyNonMember from '../utils/route/onlyNonMember';
import onlyCompany from './../utils/route/onlyCompany';
import onlyPersonal from './../utils/route/onlyPersonal';
import onlyAdmin from './../utils/route/onlyAdmin';
import CompanyMypageLayout from '../layouts/mypages/CompanyMypageLayout';
import PersonalMypageLayout from '../layouts/mypages/PersonalMypageLayout';
import ApplyListPersonal from './../pages/match/ApplyListPersonal';
import applyListPersonalRoute from './match/applyListPersonalRoute';
import getToken from './../utils/auth/getToken';
import PersonalMypage from './mypages/PersonalMypage';

export default function IndexRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route index element={<Test />} />
          <Route path='auths' loader={onlyNonMember} children={AuthsRoute()} />
          <Route path='test' loader={onlyAdmin} element={<Test />} />
          {'ROLE_PEROSNAL' === 'ROLE_PEROSNAL' ? PersonalMypage() : null}
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
