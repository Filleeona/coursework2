import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from './app/store'
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <App/>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
)
