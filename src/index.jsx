import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from '../src/redux/store';

const App = () => (
  <Provider store={store} >
    <Routes />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
