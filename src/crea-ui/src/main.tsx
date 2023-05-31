import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { RouteProviders } from './Routes';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('crea') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
        <RouteProviders />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
