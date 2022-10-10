import {Route} from 'react-router-dom';
import PersonalMypageLayout from '../../layouts/mypages/PersonalMypageLayout';
import EditPersonalInfo from '../../pages/members/mypages/EditPersonalInfo';
import ApplyRoute from '../match/ApplyRoute';
import onlyAuths from './../../utils/routes/onlyAuths';
import Withdraw from './../../pages/members/withdraws/Withdraw';

export default function PersonalMypage() {
  return (
    <Route path='mypage' loader={onlyAuths} element={<PersonalMypageLayout />}>
      <Route path='' children={ApplyRoute()} />
      <Route path='edit-profile' element={<EditPersonalInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
    </Route>
  );
}
