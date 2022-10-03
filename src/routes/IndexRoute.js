import {Route, Routes, Switch} from 'react-router-dom';
import PublicRoute from './../components/routes/PublicRoute';
import PrivateRoute from './../components/routes/PrivateRoute';

export default function IndexRoute() {
  return (
    <Routes>
      <Switch>
        <PublicRoute />
        <PrivateRoute />
      </Switch>
    </Routes>
  );
}
