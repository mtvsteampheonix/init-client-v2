import {Route} from 'react-router-dom';
import EditCompanyMemberInfo from '../../pages/members/mypages/EditCompanyMemberInfo';
import Test from './../../pages/Test';
import Withdraw from './../../pages/members/withdraws/Withdraw';
import ApplyListCompany from './../../pages/match/ApplyListCompany';
import ApplyListDetailCompany from './../../pages/match/ApplyListDetailCompany';
import InterviewSuggestionCompany from '../../pages/match/InterviewSuggestionCompany';

export default function CompanyMyPage() {
  return (
    <>
      <Route index element={<Test />}></Route>;
      <Route path='edit-profile' element={<EditCompanyMemberInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='apply-list' element={<ApplyListCompany />} />
      <Route path='apply-list/detail' element={<ApplyListDetailCompany />} />
      <Route
        path='interview-suggestion'
        element={<InterviewSuggestionCompany />}
      />
      <Route index element={<Test />}></Route>
    </>
  );
}
