import {Route} from 'react-router-dom';
import NotFound from '../../pages/errors/NotFound';
export default function ErrorRouter() {
  return (
    <>
      <Route path='not-found' element={<NotFound />} />
    </>
  );
}
