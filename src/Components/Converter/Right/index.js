import React from "react"

export default function Right() {
    return (
        <div className='label-wrapper'>
          <label className='label-text'>
            <span>Я отримаю</span>
            <input type="text" value="4150" />
            <div>
              <select className='select-left'>
                <option value="UAH">UAH</option>
                <option value="USD">USD<span className='img-EU'></span></option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </label>
        </div>
    )
}