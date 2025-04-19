import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import { StrictMode } from 'react';
import CardList from './CardList';
import { robots } from './robots'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots={robots} />
  </StrictMode>
)
 