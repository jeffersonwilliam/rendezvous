import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../actions';
import './filterbuttons.scss';

const FilterButtons = () => {
  const dispatch = useDispatch();

  const [activeButton, setActiveButton] = useState('');

  const handleView = (view) => {
    setActiveButton(view);
    dispatch(setView(view));
  };

  return (
    <div className='moreinfo-filter-btns'>
      <button
        onClick={() => handleView('details')}
        className={
          activeButton === 'details'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Details
      </button>
      <button
        onClick={() => handleView('menu')}
        className={
          activeButton === 'menu'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Menu
      </button>
      <button
        onClick={() => handleView('vibes')}
        className={
          activeButton === 'vibes'
            ? 'active-f-b ripple'
            : 'm-i-filter-button ripple'
        }
      >
        Vibes
      </button>
      <button
        onClick={() => handleView('reviews')}
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
