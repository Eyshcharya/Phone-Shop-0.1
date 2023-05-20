import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import { store } from '../../store';
import { Provider } from 'react-redux';
import HomeApp from './HomeApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeApp />
    </Provider>
  </React.StrictMode>
);
