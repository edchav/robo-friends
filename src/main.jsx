import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import { Provider  } from 'react-redux';
import { createStore } from 'redux';
import { searchRobotsReducer } from './reducers';
import { StrictMode } from 'react';
import App from './containers/App';

const store = createStore(searchRobotsReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
    
  </StrictMode>
)
 