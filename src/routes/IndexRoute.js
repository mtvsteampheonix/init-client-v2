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
import onlyPersonal from '../utils/routes/onlyPersonal';
import PersonalMypage from './mypages/PersonalMypage';
import getToken from './../utils/auths/getToken';
import ResumeRoute from './resume/ResumeRoute';

import WithdrawSuccess from './../pages/members/withdraws/WithdrawSuccess';
import onlyAuths from '../utils/routes/onlyAuths';
import onlyCompany from './../utils/routes/onlyCompany';
import CompanyMypageLayout from '../layouts/mypages/CompanyMypageLayout';
import PersonalMypageLayout from '../layouts/mypages/PersonalMypageLayout';
import NotFound from './../pages/errors/NotFound';
import jobsearchRoute from './jobsearch/JobsearchRoute';
import AdminRoute from './admins/AdminRoute';
import RootMain from '../pages/main/RootMain';
import CompanyMypage from './mypages/CompanyMypage';

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
            children={CompanyMypage()}
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
          <Route path='resume' loader={onlyPersonal} children={ResumeRoute()} />
          <Route path='withdraw-success' element={<WithdrawSuccess />} />
          <Route path='jobsearch' children={jobsearchRoute()} />
          <Route path='admin' loader={onlyAdmin} children={AdminRoute()} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
