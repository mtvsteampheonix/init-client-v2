import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Routes} from 'react-router-dom';
import IndexRoute from './routes/IndexRoute';

import theme from './utils/mui/theme';
import store from './utils/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{<IndexRoute />}</BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
