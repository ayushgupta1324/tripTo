import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom"
import AuthContextProvider from './Context/AuthContext';
import ErrorBoundary from './Errorboundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <ErrorBoundary fallback="An Error ocurred">
          <App />
        </ErrorBoundary>
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>

);

reportWebVitals();
