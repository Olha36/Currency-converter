import React from 'react'
import './App.css'
import Header from './Components/Header/index';
import getOptions from './Components/getOptions';
import { currency } from './Components/getOptions';
import GetRate from './Components/GetRate';


const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'




function getSelect(value, onSelectChange, index, fromValue) {
  const onChangeHandler = (e) => {
    onSelectChange(fromValue, e.target.value, index)
  }

  return (
    <>
      <select value={value} onChange={onChangeHandler}>
        {getOptions()}
      </select>
    </>
  )
}
const onSubmit = (e) => {
  e.preventDefault();
}  

const onSelect = (fromValue, newValue, index)=> {
  setValue(state => {
    const rate = GetRate(newValue,fromValue, data)
    const secondEl = +!index
    const newData = [...state]
    newData[secondEl] = (newData[index]*rate).toFixed(toFixedNum)
    console.log(fromValue, newValue, secondEl,  newData)
    return newData
  })   
  setSelect(state => {
    const newData = [...state]
    newData[index] = newValue
    return newData
  })
}

function filter(arr, newArr) {
  return arr.filter((i) => newArr.indexOf(i.cc) > -1)
}
function App() {
  const [data, setData] = React.useState([])
  const [select, setSelect] = React.useState([currency[0], currency[1]])
  const [[value1, value2], setValue] = React.useState([])
  const [select_1, select_2] = select

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
  }, [])

  return (
    <div className="App">
      <Header value={data[0]?.rate}/>
      <p>Конвертер валют</p>
      <div className='main'>
        <form>
          <div>
            <p>В мене є</p>
            {getSelect}
          </div>
          <div className="button" onClick={onSubmit}>
            <svg id="dualArrows">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3V0l4.5 4.5L15 9V6H0V3h15zM4.5 12h15v3h-15v3L0 13.5 4.5 9v3z"
              ></path>
            </svg>
          </div>
        </form>
      </div>
      <Calculator />
    </div>
  )
}

export default App
