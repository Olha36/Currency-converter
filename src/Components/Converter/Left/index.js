import React from 'react'
export default function Left() {
    return (
      <div className='label-wrapper'>
          <label className='label-text'>
            <span>В мене є</span>
            <input type="text" value="100" />
            <div>
              <select className='select-left'>
                <option value="USD">USD</option>
                <option value="EUR">EUR <span className='img-EU'></span></option>
                <option value="UAH">UAH</option>
              </select>
            </div>
          </label>
          <div className='button'>
            <svg id="dualArrows">
              <path fillRule="evenodd" clipRule="evenodd" d="M15 3V0l4.5 4.5L15 9V6H0V3h15zM4.5 12h15v3h-15v3L0 13.5 4.5 9v3z"></path>
            </svg>
          </div>
        </div>
    )
  }