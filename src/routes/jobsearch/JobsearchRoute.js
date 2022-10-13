import {Route, Routes} from 'react-router-dom';
import JobSearch from '../../pages/jobsearch/JobSearch';
import Details from '../../pages/jobsearch/Details';

export default function jobsearchRoute() {
  return (
    <>
      <Route index element={<JobSearch />} />
      <Route path=':id' element={<Details />} />
    </>
  );
}
