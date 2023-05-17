import React from 'react';
import { CiMap, CiClock1, CiParking1, CiLocationOn } from 'react-icons/ci';

const VenueDetails = () => {
  return (
    <div id='venuedetails-container'>
      <div id='v-c-location'>
        <CiLocationOn className='venue-icons' size={30} />
        <p>6700 Brooklyn Ave New York, NY 10005</p>
      </div>
      <div id='v-c-map'>
        <CiMap size={30} className='venue-icons' />
        <div id='v-c-map-distance'>
          <p>15 minutes from you</p>
          <p>27 minutes from John</p>
        </div>
      </div>
      <div id='v-c-time'>
        <CiClock1 className='venue-icons' size={30} />
        <p>Tuesday, March 16, 6:00 pm</p>
      </div>
      <div id='v-c-parking'>
        <CiParking1 className='venue-icons' size={30} />
        <p>Street parking available</p>
      </div>
    </div>
  );
};

export default VenueDetails;
