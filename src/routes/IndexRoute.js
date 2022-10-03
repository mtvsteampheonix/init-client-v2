import {Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import isLogin from './../utils/auths/isLogin';
import AdminRoute from './admin/AdminRoute';
import CompanyMemberRoute from './company-member/CompanyMemberRoute';
import NonMemberRoute from './non-member/NonMemberRoute';
import PersonalMemberRoute from './personal-member/PersonalMemberRoute';

export default function IndexRoute() {
  // return <AdminRoute />;
  switch (isLogin()) {
    case 'ROLE_ADMIN':
      return <AdminRoute />;
    case 'ROLE_PERSONAL':
      return <PersonalMemberRoute />;
    case 'ROLE_COMPANY':
      return <CompanyMemberRoute />;
    default:
      return <NonMemberRoute />;
  }
}
