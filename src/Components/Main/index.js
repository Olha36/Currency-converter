import React from 'react';
export default function Main() {
    return (
      <div>
        <p>Конвертер валют</p>
        <div className="courses">
          <div className='course-item card card-body'>
            <div className='course-item-title'>Курс USD</div>
            <div className='course-item-value' data-value="USD">-- --</div>
          </div>
          <div className='course-item card card-body'>
            <div className='course-item-title'>Курс EUR</div>
            <div className='course-item-value' data-value="EUR">-- --</div>
          </div>
        </div>
      </div>
    )
  }