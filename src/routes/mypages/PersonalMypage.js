import {Route} from 'react-router-dom';
import EditPersonalInfo from '../../pages/members/mypages/EditPersonalInfo';
import Withdraw from './../../pages/members/withdraws/Withdraw';
import ApplyListPersonal from '../../pages/match/ApplyListPersonal';
import ApplyListDetailPersonal from '../../pages/match/ApplyListDetailPersonal';
import SuggestionListPersonal from '../../pages/match/SuggestionListPersonal';
import SuggestionListDetailPersonal from '../../pages/match/SuggestionListDetailPersonal';

export default function PersonalMypage() {
  return (
    <>
      <Route index element={<EditPersonalInfo />} />
      <Route path='edit-profile' element={<EditPersonalInfo />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='apply-list' element={<ApplyListPersonal />} />
      <Route
        path='apply-list/detail/:noticeCode'
        element={<ApplyListDetailPersonal />}
      />
      <Route path='suggestion-list' element={<SuggestionListPersonal />} />
      <Route
        path='suggestion-list/detail/:interviewSuggestionCode'
        element={<SuggestionListDetailPersonal />}
      />
    </>
  );
}
