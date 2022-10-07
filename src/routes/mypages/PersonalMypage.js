import {Route} from 'react-router-dom';
import PersonalMypageLayout from '../../layouts/mypages/PersonalMypageLayout';
import ApplyRoute from '../match/ApplyRoute';
import onlyAuths from './../../utils/routes/onlyAuths';

export default function PersonalMypage() {
  return (
    <Route path='mypage' loader={onlyAuths} element={<PersonalMypageLayout />}>
      <Route path='' children={ApplyRoute()} />
    </Route>
  );
}
