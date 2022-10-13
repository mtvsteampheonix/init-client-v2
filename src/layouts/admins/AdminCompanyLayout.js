import {Outlet} from 'react-router-dom';
import CompanyInnerMenu from '../../components/admins/innerMenus/CompanyInnerMenu';

export default function AdminCompanyLayout() {
  return (
    <>
      <CompanyInnerMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
