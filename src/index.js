import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from 'components/Context/searchContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>
      <App />
    </SearchProvider>

  </BrowserRouter>
);
