import {Route} from 'react-router-dom';
import Login from '../../pages/auths/Login';
import AgreeTerms from './../../pages/auths/signup/AgreeTerms';
import InputFormPersonal from './../../pages/auths/signup/InputFormPersonal';

export default function AuthsRoute() {
  return (
    <>
      <Route path='login' element={<Login />} />
      <Route path='signup'>
        <Route index element={<AgreeTerms />} />
        <Route path='agree-terms' element={<AgreeTerms />} />
        <Route path='input-form-personal' element={<InputFormPersonal />} />
      </Route>
    </>
  );
}
