import AdminLayout from './AdminLayout';
import CompanyMemberLayout from './CompanyMemberLayout';
import NonMemberLayout from './NonMemberLayout';
import PersonalMemberLayout from './PersonalMemberLayout';
import getToken from '../../utils/auth/getToken';

export default function IndexLayout() {
  const LayoutSeletor = () => {
    console.log(getToken());
    switch (getToken()) {
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
