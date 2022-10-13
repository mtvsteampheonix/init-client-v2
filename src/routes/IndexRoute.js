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

export default function IndexRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route index element={<Test />} />
          <Route path='auths' loader={onlyNonMember} children={AuthsRoute()} />
          {getToken()?.auths === 'ROLE_PERSONAL' ? PersonalMypage() : null}
          <Route path='test' loader={onlyAdmin} element={<Test />} />
          <Route path='resume' loader={onlyPersonal} children={ResumeRoute()} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
