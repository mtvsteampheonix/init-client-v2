import {Route} from 'react-router-dom';
import Withdraw from './../../pages/members/withdraws/Withdraw';
import ApplyListPersonal from '../../pages/match/ApplyListPersonal';
import ApplyListDetailPersonal from '../../pages/match/ApplyListDetailPersonal';
import SuggestionListPersonal from '../../pages/match/SuggestionListPersonal';
import SuggestionListDetailPersonal from '../../pages/match/SuggestionListDetailPersonal';
import EditPersonalMemberInfo from '../../pages/members/mypages/EditPersonalMemberInfo';

export default function PersonalMypage() {
  return (
    <>
      <Route index element={<EditPersonalMemberInfo />} />
      <Route path='edit-profile' element={<EditPersonalMemberInfo />} />
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
