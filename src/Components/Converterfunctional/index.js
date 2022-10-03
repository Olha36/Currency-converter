import React from "react";
const scaleNames = {
  UAH: 'UAH',
  USD: 'USD'
};

function toUAH(USD) {
    return USD(41.4*1);
}

function toUSD(UAH) {
    return UAH(12* 0.0237);
}


function tryConvert(currency, convert) {
    const input = parseFloat(currency);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function CurrencyInputLeft (props) {
    // eslint-disable-next-line react/prop-types
    const { onCurrencyChange, currency, scale } = props;
      
    const handleChange =(e) => {
      onCurrencyChange(e.target.value);
    }
  
    return (
    <div>
      <div className='label-wrapper'>
          <label className='label-text'>
            <span>В мене є:</span>
            <input type="text" value={currency} onChange={handleChange} />
            <div>
              <select className='select-right'>
                <option value="UAH">{scaleNames[scale]}</option>
                <option value="USD">{scaleNames[scale]}</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </label>
      </div>
    </div>
    );
}

function CurrencyInputRight (props) {
  // eslint-disable-next-line react/prop-types
  const { onCurrencyChange, currency, scale } = props;
    
  const handleChange =(e) => {
    onCurrencyChange(e.target.value);
  }

  return (
  <div>
    <div className='label-wrapper'>
        <label className='label-text'>
          <span>Я отримаю:</span>
          <input type="text" value={currency} onChange={handleChange} />
          <div>
            <select className='select-right'>
              <option value="USD">{scaleNames[scale]}</option>
              <option value="EUR">{scaleNames[scale]}<span className='img-EU'></span></option>
              <option value="UAH"></option>
            </select>
          </div>
        </label>
    </div>
  </div>
  );
}
function Calculator() {  
    const [state, setState] = React.useState({currency: '', scale: ''})
    const [toggle, setToggle] = React.useState(true)
  
    const handleUAHChange = (currency)=> {
      setState({scale: 'UAH', currency});
    }
  
    const handleUSDChange = (currency) => {
      setState({scale: 'USD', currency});
    }
  
    const handlerSwith = () => {
      setToggle(state => !state)
    }
  
    const scale = state.scale;
    const currency = state.currency;
    const hryvni = scale === 'USD' ? tryConvert(currency, toUAH) : currency;
    const dollars = scale === 'UAH' ? tryConvert(currency, toUSD) : currency;
    
    const left = ( 
    <CurrencyInputLeft
      scale="UAH"
      currency={hryvni}
      onCurrencyChange={handleUAHChange} />
      )
  
    const right = ( 
      <CurrencyInputRight
        scale="USD"
        currency={dollars}
        onCurrencyChange={handleUSDChange} />
        )
  
    return (
      <div className="container">
  
        {toggle ? left : right}
            {/* <div onClick={handlerSwith}>Switch</div> */}
            <div className='button' onClick={handlerSwith}>
             <svg id="dualArrows">
               <path fillRule="evenodd" clipRule="evenodd" d="M15 3V0l4.5 4.5L15 9V6H0V3h15zM4.5 12h15v3h-15v3L0 13.5 4.5 9v3z"></path>
             </svg>
           </div>
        {toggle ? right: left}
      </div>
    );  
}

  export default Calculator;

