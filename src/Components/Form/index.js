import React from 'react'

export default function Form() {
  return (
    <>
      <form className='flex'>
        <input type="text" value="100" />
        <div>
        <svg id="dualArrows">
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3V0l4.5 4.5L15 9V6H0V3h15zM4.5 12h15v3h-15v3L0 13.5 4.5 9v3z"></path>
      </svg>
        </div>
        <label>
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </label>
      </form>
    </>
  )
}
