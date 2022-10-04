import setCookie from './setCookie';
const logout = () => {
  setCookie('bearer', '', 0);
  console.log(document.cookie);
};

export default logout;
