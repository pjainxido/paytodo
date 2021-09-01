import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'styles/global.css';
import App from './App';
import configureStore from 'modules/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


