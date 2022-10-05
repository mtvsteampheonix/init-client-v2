import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Test from './../pages/Test';
import IndexLayout from '../layouts/root-layouts/IndexLayout';

export default function IndexRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<IndexLayout />}>
          <Route index element={<Test />} />
          <Route path='auths'>{AuthsRoute()}</Route>
          <Route path='test' loader={onlyAdmin} element={<Test />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
