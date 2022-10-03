import Cookies from 'js-cookie';

const isLogin = () => {
  // const token = Cookies.get('token');
  const token = {
    role: 'ROLE_COMPANY'
  };
  return token.role;
};

export default isLogin;
