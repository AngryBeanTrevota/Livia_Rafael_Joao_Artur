
import './App.css';
import React from 'react';
import Rotas from '../components/Rotas';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
  

    <div className="App">
      <Router>
        <Rotas />
      </Router>
    </div>
  );
}

export default App;
