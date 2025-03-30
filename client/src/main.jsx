import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from './theme/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ColorModeScript
      initialColorMode={localStorage.getItem('colorMode') || 'light'}
    />
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
);
