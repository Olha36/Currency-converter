import React from "react"
import PropTypes from 'prop-types'
import dollar from './../../pics/dollar.png'

export default function Header({value }) {
    
    return (
        <div className="header">
            <img src={dollar} alt="dollar" />
            <p>{value}</p>
        </div>
    )
}

Header.propTypes = {
    value: PropTypes.number,
  }
  