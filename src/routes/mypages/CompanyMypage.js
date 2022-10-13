import {Route} from 'react-router-dom';
import ApplyListCompany from './../../pages/match/ApplyListCompany';
export default function CompanyMyPage() {
  return (
    <>
      <Route index element={<ApplyListCompany />} />
      <Route path='apply-list' element={<ApplyListCompany />} />
    </>
  );
}
