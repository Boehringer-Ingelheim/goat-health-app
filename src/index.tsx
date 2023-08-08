import { createRoot } from 'react-dom/client'; //mit react-dom geht es auf anhieb, sollte aber mit react-dom/client funktionieren
import { Provider } from 'react-redux';
import '@capacitor/core';
import App from './App';
import { store, persistor } from './store';
import './i18n';
// import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* <App /> */}
  </Provider>,
  //document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
