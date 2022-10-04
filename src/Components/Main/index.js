import React from 'react'
import PropTypes from 'prop-types'

export function MainLeft(props) {
  return (
    <div>
         <div className="course-item card card-body">
           <div className="course-item-title">Курс USD</div>
          </div>
          <div className="course-item-value" data-value="USD">
             {props.value}
           </div>
    </div>
  )
}

export function MainRight(props) {
  return (
    <div>
         <div className="course-item card card-body">
           <div className="course-item-title">Курс EUR</div>
          </div>
          <div className="course-item-value" data-value="EUR">
             {props.value}
           </div>
    </div>
  )
}

MainLeft.propTypes = {
  value: PropTypes.number,
}
MainRight.propTypes = {
  value: PropTypes.number,
}
