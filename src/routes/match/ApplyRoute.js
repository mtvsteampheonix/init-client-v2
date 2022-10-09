import {Route} from 'react-router-dom';
import ApplyListPersonal from '../../pages/match/ApplyListPersonal';
import ApplyListDetailPersonal from '../../pages/match/ApplyListDetailPersonal';
import SuggestionListPersonal from '../../pages/match/SuggestionListPersonal';
import SuggestionListDetailPersonal from '../../pages/match/SuggestionListDetailPersonal';

export default function ApplyRoute() {
  return (
    <>
      <Route path='apply-list' element={<ApplyListPersonal />} />
      <Route
        path='apply-list/detail/:noticeCode'
        element={<ApplyListDetailPersonal />}
      />
      <Route path='suggestion-list' element={<SuggestionListPersonal/>}/>
      <Route path='suggestion-list/detail/:interviewSuggestionCode' element={<SuggestionListDetailPersonal/>}/>
    </>
  );
}
