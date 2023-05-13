import React, { useState } from 'react';
import './filterbuttons.scss';

const FilterButtons = () => {
  const [activeButton, setActiveButton] = useState('');
  return (
    <div className='moreinfo-filter-btns'>
      <button
        onClick={() => setActiveButton('details')}
        className={
          activeButton === 'details'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Details
      </button>
      <button
        onClick={() => setActiveButton('menu')}
        className={
          activeButton === 'menu'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Menu
      </button>
      <button
        onClick={() => setActiveButton('vibes')}
        className={
          activeButton === 'vibes'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Vibes
      </button>
      <button
        onClick={() => setActiveButton('reviews')}
        className={
          activeButton === 'reviews'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Reviews
      </button>
    </div>
  );
};

export default FilterButtons;
