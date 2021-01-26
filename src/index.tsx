import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@capacitor/core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './store';
import history from './utils/history';
import './i18n';
import './index.css';

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
