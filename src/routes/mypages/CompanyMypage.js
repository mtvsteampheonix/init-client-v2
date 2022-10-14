import {Route} from 'react-router-dom';
import EditCompanyMemberInfo from '../../pages/members/mypages/EditCompanyMemberInfo';
import Test from '../../pages/Test';
import Withdraw from '../../pages/members/withdraws/Withdraw';
import ApplyListCompany from '../../pages/match/ApplyListCompany';
import ApplyListDetailCompany from '../../pages/match/ApplyListDetailCompany';
import InterviewSuggestionCompany from '../../pages/match/InterviewSuggestionCompany';
import MyJobSearch from '../../pages/companyMypage/MyJobSearch';
import RegistJobSearch from '../../pages/companyMypage/RegistJobSearch';
import MyJobSearchDetails from '../../pages/companyMypage/MyJobSearchDetails'; 

export default function CompanyMypage() {
  return (
    <>
      <Route index element={<Test />}></Route>;
      <Route path='edit-profile' element={<EditCompanyMemberInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='apply-list/detail' element={<ApplyListDetailCompany />} />
      <Route path='apply-list/:noticeCode' element={<ApplyListCompany />} />
      <Route
        path='interview-suggestion'
        element={<InterviewSuggestionCompany />}
      />
      <Route path='jobsearch' element={<MyJobSearch />} />
      <Route path='jobsearch/:id' element={<MyJobSearchDetails/>}/>
      <Route path='regist-jobsearch' element={<RegistJobSearch/>} />
      <Route index element={<Test />}></Route>
    </>
  );
}
