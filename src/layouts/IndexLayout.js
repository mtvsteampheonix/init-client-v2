import AdminLayout from './root-layouts/AdminLayout';
import CompanyMemberLayout from './root-layouts/CompanyMemberLayout';
import NonMemberLayout from './root-layouts/NonMemberLayout';
import PersonalMemberLayout from './root-layouts/PersonalMemberLayout';
import getToken from './../utils/auth/getToken';

export default function IndexLayout() {
  const LayoutSeletor = () => {
    switch (getToken().role) {
      case 'ROLE_ADMIN':
        return <AdminLayout />;
      case 'ROLE_PERSONAL':
        return <PersonalMemberLayout />;
      case 'ROLE_COMPANY':
        return <CompanyMemberLayout />;
      default:
        return <NonMemberLayout />;
    }
  };

  return <LayoutSeletor />;
}
