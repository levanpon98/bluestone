import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createWrapper } from 'next-redux-wrapper'
const {persistStore, persistReducer} = require('redux-persist');
const storage = require('redux-persist/lib/storage').default;

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const persistConfig = {
    key: 'bluestone',
    whitelist: ['auth'],
    storage
};

export const makeStore =(context) => {
    const sagaMiddleware = createSagaMiddleware()
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]))
  
    store.sagaTask = sagaMiddleware.run(rootSaga)
    store.__persistor = persistStore(store); 
    return store
}
export const wrapper = createWrapper(makeStore)

