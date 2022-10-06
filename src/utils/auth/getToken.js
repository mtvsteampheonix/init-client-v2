import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const getToken = () => {
  const token = Cookies.get('bearer');
  let role;
  try {
    role = jwtDecode(token);
  } catch (e) {
    role = null;
  }
  return role;
};

export default getToken;
