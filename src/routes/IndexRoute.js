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
import WithdrawSuccess from './../pages/members/withdraws/WithdrawSuccess';
import onlyAuths from '../utils/routes/onlyAuths';
import onlyCompany from './../utils/routes/onlyCompany';
import CompanyMyPage from './mypages/CompanyMyPage';
import CompanyMypageLayout from '../layouts/mypages/CompanyMypageLayout';
import PersonalMypageLayout from '../layouts/mypages/PersonalMypageLayout';
import NotFound from './../pages/errors/NotFound';
import JobSearch from '../pages/jobsearch/JobSearch';
import jobsearchRoute from './jobsearch/JobsearchRoute';
import AdminRoute from './admins/AdminRoute';
import RootMain from '../pages/main/RootMain';

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
          <Route index element={<RootMain />} />
          <Route path='auths' loader={onlyNonMember} children={AuthsRoute()} />
          <Route path='mypage' children={MypageSwitch()} />
          <Route path='test' loader={onlyAdmin} element={<Test />} />
          <Route path='withdraw-success' element={<WithdrawSuccess />} />
          <Route
            path='jobsearch'
            children={jobsearchRoute()}
          />
          <Route path='admin' loader={onlyAdmin} children={AdminRoute()} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
