import {Route} from 'react-router-dom';
import Test from '../../pages/Test';
import MyJobSearch from '../../pages/companyMypage/MyJobSearch';
import MyJobSearchDetails from '../../pages/companyMypage/MyJobSearchDetails';
import RegistJobSearch from '../../pages/companyMypage/RegistJobSearch';
import EditCompanyMemberInfo from './../../pages/members/mypages/EditCompanyMemberInfo';
import Withdraw from '../../pages/members/withdraws/Withdraw';
import ApplyListCompany from './../../pages/match/ApplyListCompany';
import EntApplyListDetails from './../../pages/match/ApplyListDetailCompany';
import WriteProposal from './../../pages/match/WriteProposal';

export default function CompanyMypage() {
  return (
    <>
      <Route index element={<Test />} />
      <Route path='jobsearch'>
        <Route index element={<MyJobSearch />} />
        <Route path=':id' element={<MyJobSearchDetails />} />
      </Route>
      <Route path='regist-jobsearch' element={<RegistJobSearch />} />
      <Route path='edit-profile' element={<EditCompanyMemberInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='apply-list' element={<ApplyListCompany />} />
      <Route path='apply-list/detail' element={<EntApplyListDetails />} />
      <Route path='write-proposal' elemen={<WriteProposal />} />
    </>
  );
}
