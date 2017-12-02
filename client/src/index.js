import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { browserHistory } from 'react-router';
import Routes from './routes';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
