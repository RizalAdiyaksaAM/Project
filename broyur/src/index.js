import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { RouterList } from './routes/RouterList';
import { NextUIProvider } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
  <React.StrictMode>
    <RouterList />
  </React.StrictMode>
  </NextUIProvider>
);


