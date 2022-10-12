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
import CompanyMypage from './mypages/CompanyMypage';
import JobSearch from '../pages/jobsearch/JobSearch';
import jobsearchRoute from './jobsearch/JobsearchRoute';

export default function IndexRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route index element={<Test />} />
          <Route path='auths' loader={onlyNonMember} children={AuthsRoute()} />
          {getToken()?.auths === 'ROLE_PERSONAL' ? PersonalMypage() : CompanyMypage()}
          <Route path='test' loader={onlyAdmin} element={<Test />} />
          <Route path="jobsearch" children={jobsearchRoute()}/>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
