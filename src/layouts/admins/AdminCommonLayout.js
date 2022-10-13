import {Outlet} from 'react-router-dom';
import CommonInnerMenu from '../../components/admins/innerMenus/CommonInnerMenu';

export default function AdminCommonLayout() {
  return (
    <>
      <CommonInnerMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
