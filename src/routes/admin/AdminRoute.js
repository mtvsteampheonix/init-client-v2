import {Route, Routes} from 'react-router-dom';
const Temp = () => {
  return <h1>임시 어드민 페이지</h1>;
};

export default function AdminRoute() {
  return (
    <Routes>
      <Route path='/' element={<Temp />} />
    </Routes>
  );
}
