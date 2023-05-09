import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import './condition.scss';

const Conditions = () => {
  return (
    <div id='conditions-container'>
      <div id='weather-widget'>
        <div id='weather-widget-content'>
          <BsFillSunFill size={40} style={{ fill: '#F28C38' }} />
          {/* Weather here */}
          <p className='widget-alert-info'>Sunny 75 F</p>
        </div>
      </div>
      <div id='time-widget'>
        <div id='time-widget-content'>
          <p>Leave at</p>
          <p className='widget-alert-info'>5:33PM</p>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
