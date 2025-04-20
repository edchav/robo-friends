import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import { StrictMode } from 'react';
import App from './containers/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
 