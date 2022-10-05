import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const getToken = () => {
  const token = Cookies.get('bearer');

  let role;
  try {
    console.log(jwtDecode(token));
    role = jwtDecode(token).auths[0];
  } catch (e) {
    role = null;
  }
  console.log(role);
  return role;
};

export default getToken;
