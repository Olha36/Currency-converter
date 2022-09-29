import React from 'react';
import dollar from './dollar.png';
import './App.css';
import Main from './Components/Main';
import Converter from './Components/Converter';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={dollar} alt="dollar" />
      </header>
      <Main />
      <Converter />
    </div>
  );
}

export default App;
