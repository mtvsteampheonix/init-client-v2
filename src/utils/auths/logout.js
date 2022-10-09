import setCookie from './setCookie';
const logout = () => {
  setCookie('bearer', '', new Date().getTime());
  console.log(document.cookie);
};

export default logout;
