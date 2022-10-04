import React from 'react'
import './App.css'
// import Main from './Components/Main'
import Calculator from './Components/Converterfunctional'
import Header from './Components/Header/index';
// eslint-disable-next-line no-global-assign
URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
import { MainLeft, MainRight } from './Components/Main/index';

function App() {
  const [data, setData] = React.useState([])
  const [currency] = React.useState(['USD', 'EUR', 'UAH'])

  function filter(arr, newArr) {
    return arr.filter((i) => newArr.indexOf(i.cc) > -1)
  }

  React.useEffect(() => {
    fetch(URL)
      .then((response) => {        
        return response.json()
      })
      .then((data) => {
        return setData(filter(data, currency))
      })
  }, [currency])

  return (
    <div className="App">
      <Header value={data[0]?.rate}/>
      <p>Конвертер валют</p>
      <div className='main'>
        <MainLeft value={data[0]?.rate}/>
        <MainRight value={data[1]?.rate}/>
      </div>
      <Calculator />
    </div>
  )
}

export default App
