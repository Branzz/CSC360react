import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
import { RequestProvider } from 'react-request-hook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RequestProvider value={axios.create({
          baseURL: 'http://localhost:3000/api/'
      })}>
          <App />
      </RequestProvider>
  </React.StrictMode>
);
