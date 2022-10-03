import React, {useState} from 'react'
import dollar from './dollar.png'
import './App.css'
import Main from './Components/Main'
import Calculator from './Components/Converterfunctional'
let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'


function App() {
  const [data, setData] = useState([]);
  const [currency] = useState(['USD', 'EUR', 'UAH'])

  function filter(arr, newArr) {
    return arr.filter(i => newArr.indexOf(i.cc) > -1)
  }

  React.useEffect(() => {
    fetch(URL) 
    .then(response => response.json())
    .then(data => setData(filter(data, currency)));
  }, [currency])

  return (
    <div className="App">
      <header className="App-header">
        <img src={dollar} alt="dollar" />
        {/* <p>{[setData]}</p> */}
      </header>
      <Main />
      {/* <Converter /> */}
      <Calculator />
      {console.log(data)}
      {console.log(data[0].rate)}
      {console.log(currency[0].rate)}
    </div>
  )
}

export default App
