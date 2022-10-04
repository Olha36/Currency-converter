import React from "react"
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <div>
            {/* <img src={dollar} alt="dollar" /> */}
            <p>{props.value}</p>
        </div>
    )
}

Header.propTypes = {
    value: PropTypes.number,
  }
  