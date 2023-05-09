import React from 'react';
import './condition.scss';

const Conditions = () => {
  return (
    <div id='conditions-container'>
      <div id='weather-widget'>
        <div id='weather-widget-content'>Weather here</div>
      </div>
      <div id='time-widget'>
        <div id='time-widget-content'>Leave by 5pm</div>
      </div>
    </div>
  );
};

export default Conditions;
