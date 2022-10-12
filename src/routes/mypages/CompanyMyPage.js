import {Route} from 'react-router-dom';
import Test from './../../pages/Test';

export default function CompanyMyPage() {
  return <Route index element={<Test />}></Route>;
}
