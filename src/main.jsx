import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';
import { StrictMode } from 'react';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </StrictMode>
)
 