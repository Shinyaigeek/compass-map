import { call, put, takeEvery, fork, select } from 'redux-saga/effects';
import * as Api from './api/api';

import * as actionTypes from './utils/actionTypes';


function* watchSaga() {
    return 0
}

export default function* rootSaga() {
    yield fork(watchSaga);
}