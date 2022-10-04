import Cookies from 'js-cookie';

const isLogin = () => {
  // const token = Cookies.get('token');
  const token = {
    role: null
  };
  return token.role;
};

export default isLogin;
