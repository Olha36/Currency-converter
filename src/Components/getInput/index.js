import React from "react"
export default function getInput(value, onChange, curFrom, curTo, index) {
    const onChangeHandler = (e) => {
      onChange(e.target.value, curFrom, curTo, index)
    }
  
    return <input type='number' value={value} onChange={onChangeHandler}></input>
}
