import {Route} from 'react-router-dom';
import ApplyListPersonal from '../../pages/match/ApplyListPersonal';
import ApplyListDetailPersonal from '../../pages/match/ApplyListDetailPersonal';
import SuggestionListPersonal from '../../pages/match/SuggestionListPersonal';

export default function ApplyRoute() {
  return (
    <>
      <Route path='apply-list' element={<ApplyListPersonal />} />
      <Route
        path='apply-list/detail/:noticeCode'
        element={<ApplyListDetailPersonal />}
      />
      <Route path='suggestion-list' element={<SuggestionListPersonal/>}/>
    </>
  );
}
