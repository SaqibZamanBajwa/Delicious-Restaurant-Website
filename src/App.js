import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
