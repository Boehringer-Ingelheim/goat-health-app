import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '@capacitor/core';
import App from './App';
import { store, persistor } from './store';
import './i18n';
import './index.css';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate> */}
    <App />
  </Provider>,
  //document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
