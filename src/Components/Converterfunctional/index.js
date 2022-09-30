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

function CurrencyInput (props) {
    // eslint-disable-next-line react/prop-types
    const { onCurrencyChange, currency, scale } = props;
      
    const handleChange =(e) => {
      onCurrencyChange(e.target.value);
    }
  
    return (
    //   <fieldset>
    //     <legend>Enter currency in {scaleNames[scale]}:</legend>
    //     <input value={currency}
    //             onChange={handleChange} />
    //   </fieldset>

    <div className='label-wrapper'>
          <label className='label-text'>
            <span>Я отримаю {scaleNames[scale]}:</span>
            <input type="text" value={currency} onChange={handleChange} />
            <div>
              <select className='select-right'>
                <option value="UAH">UAH</option>
                <option value="USD">USD<span className='img-EU'></span></option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </label>
        </div>
    );
}

function Calculator() {  
    const [state, setState] = React.useState({currency: '', scale: 'UAH'})
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
    <CurrencyInput
      scale="UAH"
      currency={hryvni}
      onCurrencyChange={handleUAHChange} />
      )
  
    const right = ( 
      <CurrencyInput
        scale="USD"
        currency={dollars}
        onCurrencyChange={handleUSDChange} />
        )
  
    return (
      <div>
  
        {toggle ? left : right}
            <br/>
            <div onClick={handlerSwith}>Switch</div>
            <br/>
        {toggle ? right: left}
      </div>
    );  
}

  export default Calculator;
