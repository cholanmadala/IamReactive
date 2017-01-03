import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import App from './App';

ReactDOM.render(
  <App defaultMessage="Ola" name="Cholan" age={27} > Hello World!</App>,
  document.getElementById('root')
);
