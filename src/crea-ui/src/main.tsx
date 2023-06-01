import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { RouteProviders } from './Routes';
import { store } from './store';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('crea') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
        <RouteProviders />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
