import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { unregister } from './registerServiceWorker';

// eslint-disable-next-line no-undef
ReactDOM.render(<Router />, document.getElementById('root'));
unregister();
