import { put, call, select, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import omit from 'lodash/omit';

// import { getUserDetail } from 'apis';

import {
    // actionTypes,
    // getUserDetailSuccess,
    // getUserDetailFailure,
} from 'redux/actions/auth';

export function* getUserDetailData(payload) {
    try {
        // const data = yield getUserDetail(payload);
        // yield put(getUserDetailSuccess(data));
        // if (data && data.data.isLoggedIn) {
        //     yield call(getJWTTokenSaga);
        // }
    } catch (error) {
        // yield put(getUserDetailFailure(error));
    }
}

export default [
    takeLatest('ahsjdbgvshjl', getUserDetailData),
]
