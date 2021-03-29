import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@capacitor/core';
import App from './App';
import { store } from './store';
import { matchMedia } from './utils/test-utils';

test('renders without crashing', () => {
  matchMedia();
  const { baseElement } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(baseElement).toBeDefined();
});
