import {Outlet} from 'react-router-dom';
import PersonalInnerMenu from '../../components/admins/innerMenus/PersonalInnerMenu';

export default function AdminPersonalLayout() {
  return (
    <>
      <PersonalInnerMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
