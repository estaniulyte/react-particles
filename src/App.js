import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import React from 'react';

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/react-particles">
      <div className="App-header">
        <main className="content">
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
