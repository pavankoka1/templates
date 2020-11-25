import { all } from 'redux-saga/effects';
import authSaga from 'redux/sagas/auth';

export default function* rootSaga() {
    yield all([
        ...authSaga,
    ]);
}
