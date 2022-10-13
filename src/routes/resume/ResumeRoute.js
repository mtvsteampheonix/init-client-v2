import {Route, Routes} from 'react-router-dom';
// import Error404 from '../pages/errors/Error404';
import {AddStepCategory} from '../../pages/resume/Add-step';
import AddStepDetail from '../../pages/resume/AddStepDetail';
import {Manage} from '../../pages/resume/Manage';
import ResumeEdit from '../../pages/resume/ResumeEdit';
import ResumeDetail from '../../pages/resume/ResumeDetail';

export default function ResumeRoute() {
  return (
    <>
      <Route index element={<Manage />} />
      <Route path='add' element={<AddStepCategory />} />
      <Route path='add/detail' element={<AddStepDetail />} />
      <Route path='edit/:id' element={<ResumeEdit />} />
      <Route path='detail/:id' element={<ResumeDetail />} />

      {/* <Route path='*' element={<Error404 />} /> */}
    </>
  );
}
