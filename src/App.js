import React from 'react'
// import dollar from './dollar.png'
import './App.css'
import Main from './Components/Main'
// import Calculator from './Components/Converterfunctional'
import Header from './Components/Header/index';
// eslint-disable-next-line no-global-assign
URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

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
      <header className="App-header">
        {/* <img src={dollar} alt="dollar" /> */}
        <Header value={data[0]?.rate}/>
      </header>
      <Main value={data[0]?.rate} />
    </div>
  )
}

export default App
