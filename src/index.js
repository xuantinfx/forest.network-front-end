import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
