import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const getToken = () => {
  const token = Cookies.get('bearer');
  let auths;
  try {
    auths = jwtDecode(token).auths[0];
  } catch (e) {
    auths = null;
  }
  return auths;
};

export default getToken;
