import {Route} from 'react-router-dom';
import Test from './../../pages/Test';
import ApplyListCompany from './../../pages/match/ApplyListCompany';

export default function CompanyMyPage() {
  return (
    <>
      <Route path='apply-list' element={<ApplyListCompany />} />
      <Route index element={<Test />}></Route>
    </>
  );
}
