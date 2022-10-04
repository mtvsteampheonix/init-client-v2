import Cookies from 'js-cookie';

const getToken = () => {
  // const token = Cookies.get('token');
  const token = {
    role: 'null'
  };
  return token;
};

export default getToken;
