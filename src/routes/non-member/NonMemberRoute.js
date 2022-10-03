import {Route, Routes} from 'react-router-dom';
const Temp = () => {
  return <h1>임시 비회원 페이지</h1>;
};
export default function NonMemberRoute() {
  return (
    <Routes>
      <Route path='/' element={<Temp />} />
    </Routes>
  );
}
