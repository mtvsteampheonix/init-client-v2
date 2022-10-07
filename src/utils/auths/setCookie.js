export default function setCookie(key, value, expiredays) {
  let today = new Date();
  today.setTime(expiredays);
  document.cookie =
    encodeURIComponent(key) +
    '=' +
    encodeURIComponent(value) +
    ';expires=' +
    today.toUTCString() +
    ';path="/"';
}
