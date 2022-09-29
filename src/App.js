import React from 'react';
import dollar from './dollar.png';
import './App.css';
import Main from './Components/Main';
import Form from './Components/Form';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={dollar} alt="dollar" />
      </header>
      <Main />
      <Form />
    </div>
  );
}

export default App;
