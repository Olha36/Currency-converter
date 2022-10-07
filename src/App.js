import React from 'react'
import './App.css'
import Header from './Components/Header/index'
import { currency } from './Components/getOptions'
import GetRate from './Components/GetRate'
import getSelect from './Components/GetSelect'
import getInput from './Components/getInput'
import filter from './Components/filter'

const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

const toFixedNum = 2

function App() {
  const [data, setData] = React.useState([])
  const [select, setSelect] = React.useState([currency[0], currency[1]])
  const [[value_1, value_2], setValue] = React.useState([])
  const [select_1, select_2] = select

  React.useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return setData(filter(data, currency))
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onSelect = (fromValue, newValue, index) => {
    setValue((state) => {
      const rate = GetRate(newValue, fromValue, data)
      const secondEl = +!index
      const newData = [...state]
      newData[secondEl] = (newData[index] * rate).toFixed(toFixedNum)
      console.log(fromValue, newValue, secondEl, newData)
      return newData
    })
    setSelect((state) => {
      const newData = [...state]
      newData[index] = newValue
      return newData
    })
  }

  const onButtonClick = () => {
    setSelect((state) => {
      const x = [...state].reverse()
      return x
    })
    setValue((state) => {
      const x = [...state].reverse()
      return x
    })
  }

  const onInput = (value, curFrom, curTo, index) => {
    setValue((state) => {
      const rate = GetRate(curFrom, curTo, data)
      const secondEl = +!index
      const newData = [...state]
      newData[index] = value
      newData[secondEl] = (value * rate).toFixed(toFixedNum)
      return newData
    })
  }

  return (
    <div className="App">
      <Header value={data[0]?.rate} />
      <p>Конвертер валют</p>
      <div className="main">
        <form onSubmit={onSubmit}>
          <div className='container'>
            <p>В мене є</p>
            {getSelect(select_1, onSelect, 0, select_2)}
            {getInput(value_1, onInput, select_1, select_2, 0)}
          </div>
          <div className="button" onClick={onButtonClick}>
            <svg id="dualArrows">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3V0l4.5 4.5L15 9V6H0V3h15zM4.5 12h15v3h-15v3L0 13.5 4.5 9v3z"
              ></path>
            </svg>
          </div>
          <div className='container'>
            <p>Я отримаю</p>
            {getSelect(select_2, onSelect, 1, select_1)}
            {getInput(value_2, onInput, select_2, select_1, 1)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
