import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';

import reducer from './reducers/';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import Compass from './container/Compass'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const target = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <Compass />
    </Provider>
    , target);
serviceWorker.unregister();
