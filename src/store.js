import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducer/indexForredux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './redux/saga/Rootsaga';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['userReducer']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
let persistor = persistStore(store)

sagaMiddleware.run(RootSaga)

export default store
export { persistor, store }