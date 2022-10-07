import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const getToken = () => {
  const token = Cookies.get('bearer');
  let DecodeToken;
  try {
    DecodeToken = jwtDecode(token);
  } catch (e) {
    DecodeToken = null;
  }
  return DecodeToken;
};

export default getToken;
