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
import CompanyMyPage from './mypages/CompanyMypage';
import onlyAuths from '../utils/routes/onlyAuths';
import PersonalMypageLayout from '../layouts/mypages/PersonalMypageLayout';
import onlyCompany from '../utils/routes/onlyCompany';
import CompanyMypageLayout from '../layouts/mypages/CompanyMypageLayout';
export default function IndexRoute() {
  const MypageSwitch = () => {
    switch (getToken()?.auths) {
      case 'ROLE_PERSONAL':
        return (
          <Route
            loader={onlyAuths}
            children={PersonalMypage()}
            element={<PersonalMypageLayout />}
          />
        );
      case 'ROLE_COMPANY':
        return (
          <Route
            loader={onlyCompany}
            children={CompanyMyPage()}
            element={<CompanyMypageLayout />}
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
          <Route path='mypage' children={MypageSwitch()} />
          <Route path='test' loader={onlyAdmin} element={<Test />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
