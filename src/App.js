import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import IndexRoute from './routes/IndexRoute';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import theme from './utils/muis/theme';
import store from './utils/reduxStores/store';

const persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>{<IndexRoute />}</ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
