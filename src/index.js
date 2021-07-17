import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/home/Home';
import { CartProvider } from './context/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Home />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

