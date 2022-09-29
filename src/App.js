import React, {useState} from 'react'
import dollar from './dollar.png'
import './App.css'
import Main from './Components/Main'
import Converter from './Components/Converter'
let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

function App() {
  const [data, setData] = useState([]);
  const [currency] = useState(['USD', 'EUR', 'UAH'])

  React.useEffect(() => {
    fetch(URL) 
    .then(response => response.json())
    .then(data => setData(data, currency));
  }, [currency])

  return (
    <div className="App">
      <header className="App-header">
        <img src={dollar} alt="dollar" />
      </header>
      <Main />
      <Converter />
      {console.log(data)}
    </div>
  )
}

export default App
