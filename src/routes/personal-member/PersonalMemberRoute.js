import {Route, Routes} from 'react-router-dom';
const Temp = () => {
  return <h1>임시 개인회원 페이지</h1>;
};
export default function PersonalMemberRoute() {
  return (
    <Routes>
      <Route path='/' element={<Temp />} />
    </Routes>
  );
}
