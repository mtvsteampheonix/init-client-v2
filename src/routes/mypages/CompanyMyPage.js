import {Route} from 'react-router-dom';
import EditCompanyMemberInfo from '../../pages/members/mypages/EditCompanyMemberInfo';
import Test from './../../pages/Test';
import Withdraw from './../../pages/members/withdraws/Withdraw';
import ApplyListCompany from './../../pages/match/ApplyListCompany';

export default function CompanyMyPage() {
  return (
    <>
      <Route index element={<Test />}></Route>;
      <Route path='edit-profile' element={<EditCompanyMemberInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='apply-list' element={<ApplyListCompany />} />
      <Route index element={<Test />}></Route>
    </>
  );
}
