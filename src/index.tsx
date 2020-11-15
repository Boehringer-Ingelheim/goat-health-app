import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import i18n (needs to be bundled ;))
import './i18n';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import './index.css';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={'Loading'} persistor={persistor}>
      <ConnectedRouter history={history}>
        {/* place ConnectedRouter under Provider */}
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
