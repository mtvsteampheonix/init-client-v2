import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import IndexRoute from './routes/IndexRoute';

import theme from './utils/muis/theme';
import store from './utils/reduxStores/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{<IndexRoute />}</ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
