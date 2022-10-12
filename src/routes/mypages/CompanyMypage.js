import {Route} from 'react-router-dom';
import  CompanyMypageLayout from '../../layouts/mypages/CompanyMypageLayout';
import onlyAuths from './../../utils/routes/onlyAuths';
import MyJobSearch from '../../pages/companyMypage/MyJobSearch';
import MyJobSearchDetails from '../../pages/companyMypage/MyJobSearchDetails';
import RegistJobSearch from'../../pages/companyMypage/RegistJobSearch';


export default function CompanyMypage() {
  return (
    <Route path='mypage' loader={onlyAuths} element={<CompanyMypageLayout />}>
        <Route path='jobsearch' element={<MyJobSearch/>}/>
        <Route path='jobsearch/:id' element={<MyJobSearchDetails/>}/>
        <Route path='regist-jobsearch' element={<RegistJobSearch />}/>
      {/* <Route path='' children={ApplyRoute()} /> */}
    </Route>
  );
}
