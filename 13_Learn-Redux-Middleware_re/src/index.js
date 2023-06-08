import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer, { rootSaga } from './module';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger, ReduxThunk, sagaMiddleware)
  });
  sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
