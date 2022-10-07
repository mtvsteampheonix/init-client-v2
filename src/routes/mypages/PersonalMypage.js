import {Route} from 'react-router-dom';
import PersonalMypageLayout from '../../layouts/mypages/PersonalMypageLayout';
import ApplyListPersonal from '../../pages/match/ApplyListPersonal';
import onlyAuths from './../../utils/route/onlyAuths';
export default function PersonalMypage() {
  return (
    <Route path='mypage' loader={onlyAuths} element={<PersonalMypageLayout />}>
      <Route path='apply-list' element={<ApplyListPersonal />} />
    </Route>
  );
}
