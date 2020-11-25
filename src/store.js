import LogRocket from 'logrocket';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxPromise from 'redux-promise';
import reducers from 'redux/reducers';
import sagas from 'redux/sagas';

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(reduxPromise, LogRocket.reduxMiddleware()),
    applyMiddleware(sagaMiddleware),
);

const store = createStore(
    reducers,
    {},
    enhancer,
);

sagaMiddleware.run(sagas);

export default store;
