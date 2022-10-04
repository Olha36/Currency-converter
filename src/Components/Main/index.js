import React from 'react'
import PropTypes from 'prop-types'

export default function Main(props) {
  return (
    <div>
      <p>Конвертер валют</p>
      <div className="courses">
        <div className="course-item card card-body">
          <div className="course-item-title">Курс USD</div>
          <div className="course-item-value" data-value="USD">
            {props.value}
          </div>
        </div>
        <div className="course-item card card-body">
          <div className="course-item-title">Курс EUR</div>
          <div className="course-item-value" data-value="EUR">
            --
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  value: PropTypes.number,
}
