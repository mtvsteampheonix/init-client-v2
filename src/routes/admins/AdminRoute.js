import {Route} from 'react-router-dom';
import AdminCommonLayout from '../../layouts/admins/AdminCommonLayout';
import AdminPersonalLayout from '../../layouts/admins/AdminPersonalLayout';
import AdminCompanyLayout from './../../layouts/admins/AdminCompanyLayout';
import Test from '../../pages/Test';
import Signupplz from '../../pages/admins/SignupPlz';
import SignupplzDetails from './../../pages/admins/SignupplzDetails';
import ResumeList from '../../pages/admins/ResumeList';
import ResumeDetail from '../../pages/admins/ResumeDetail';
export default function AdminRoute() {
  return (
    <>
      <Route index element={<Test />} />
      <Route path='personal' element={<AdminPersonalLayout />}>
        <Route path='resume' element={<ResumeList />} />
        <Route path='resume/:resumeCode' element={<ResumeDetail />} />
      </Route>
      <Route path='company' element={<AdminCompanyLayout />}>
        <Route path='signupplz' element={<Signupplz />} />
        <Route path='signupplz/:memberCode' element={<SignupplzDetails />} />
      </Route>
      <Route path='common' element={<AdminCommonLayout />}></Route>
    </>
  );
}
