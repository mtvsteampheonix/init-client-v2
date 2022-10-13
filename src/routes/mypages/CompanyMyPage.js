import {Route} from 'react-router-dom';
import EditCompanyMemberInfo from '../../pages/members/mypages/EditCompanyMemberInfo';
import Test from './../../pages/Test';
import Withdraw from './../../pages/members/withdraws/Withdraw';

export default function CompanyMyPage() {
  return (
    <>
      <Route index element={<Test />}></Route>;
      <Route path='edit-profile' element={<EditCompanyMemberInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
    </>
  );
}
