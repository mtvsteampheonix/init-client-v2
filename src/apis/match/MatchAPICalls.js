const rootURL = 'http://localhost:8080';

export function callApplyListPersonalAPI(memberCode) {
  return async function getApplyListPersonalAPI() {
    const result = fetch(
      rootURL + '/members/personal/apply-list/' + memberCode
    ).then((result) => result.json());
    console.log(result);
  };
}
