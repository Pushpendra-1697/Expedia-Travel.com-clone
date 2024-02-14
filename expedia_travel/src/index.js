import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import CartContextProvider from './Context/CartContext/CartContextProvider';
import ThemeContextProvider from './Context/ThemeContext/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ChakraProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </CartContextProvider>
    </ChakraProvider>
  </ThemeContextProvider>
);
