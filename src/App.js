import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Indexbigimg from './components/Indexbigimg';
import Cooperation from './components/Cooperation';
import Pro from './components/Pro';
import Temp from './components/Temp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Indexbigimg/>
      <Pro/>
      <Cooperation/>
      <Temp/>
    </div>
  );
}

export default App;
