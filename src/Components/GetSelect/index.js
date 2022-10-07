import React from 'react';
import getOptions from '../getOptions';
export default function getSelect(value, onSelectChange, index, fromValue) {
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