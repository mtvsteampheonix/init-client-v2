import {Route} from 'react-router-dom';
import Login from '../../pages/auths/Login';
import InputFormCompany from '../../pages/auths/signup/InputFormCompany';
import AgreeTerms from './../../pages/auths/signup/AgreeTerms';
import InputFormPersonal from './../../pages/auths/signup/InputFormPersonal';
import ResetPassword from './../../pages/admins/ResetPassword';

export default function AuthsRoute() {
  return (
    <>
      <Route path='login' element={<Login />} />
      <Route path='signup'>
        <Route index element={<AgreeTerms />} />
        <Route path='agree-terms' element={<AgreeTerms />} />
        <Route path='input-form-personal' element={<InputFormPersonal />} />
        <Route path='input-form-company' element={<InputFormCompany />} />
      </Route>
      <Route path='reset-password' element={<ResetPassword />} />
    </>
  );
}
