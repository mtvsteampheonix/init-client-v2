import {Route} from 'react-router-dom';
import Test from '../../pages/Test';
import MyJobSearch from '../../pages/companyMypage/MyJobSearch';
import MyJobSearchDetails from '../../pages/companyMypage/MyJobSearchDetails';
import RegistJobSearch from '../../pages/companyMypage/RegistJobSearch';

export default function CompanyMyPage() {
  return (
    <>
      <Route index element={<Test />} />
      <Route path='jobsearch'>
        <Route index element={<MyJobSearch />} />
        <Route path=':id' element={<MyJobSearchDetails />} />
      </Route>
      <Route path='regist-jobsearch' element={<RegistJobSearch />} />
    </>
  );
}
