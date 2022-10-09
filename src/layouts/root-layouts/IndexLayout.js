import AdminLayout from './AdminLayout';
import CompanyMemberLayout from './CompanyMemberLayout';
import NonMemberLayout from './NonMemberLayout';
import PersonalMemberLayout from './PersonalMemberLayout';
import getToken from '../../utils/auths/getToken';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

export default function IndexLayout() {
  // 스크롤 맨위로 올리기
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const LayoutSeletor = () => {
    switch (getToken()?.auths) {
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
