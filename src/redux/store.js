import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer, { watchSomeAction } from './ducks/products';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  listProducts: reducer,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchSomeAction);

export default store;
