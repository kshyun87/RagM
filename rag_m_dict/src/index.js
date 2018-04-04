import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TestManager from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(TestManager);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
