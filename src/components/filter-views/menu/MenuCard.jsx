import React from 'react';
import r1 from '../../../assets/r1.jpg';
import r2 from '../../../assets/r2.jpg';
import r3 from '../../../assets/r3.jpg';
import r4 from '../../../assets/r4.jpg';
import r5 from '../../../assets/r5.jpg';
import r6 from '../../../assets/r6.jpg';
import r7 from '../../../assets/r7.jpg';
import r8 from '../../../assets/r8.jpg';
import r9 from '../../../assets/r9.jpg';
import './MenuCard.scss';

const MenuCard = () => {
  return (
    <div>
      <div className='m-c-style'>
        <img src={r7} alt='' />
        <div className='meal-details'>
          <h3>Title</h3>
          <p className='meal-description'>Description</p>
          <p className='meal-price'>Price</p>
        </div>
      </div>
      <div className='m-c-style'>
        <img src={r7} alt='' />
        <div className='meal-details'>
          <h3>Title</h3>
          <p className='meal-description'>Description</p>
          <p className='meal-price'>Price</p>
        </div>
      </div>
      <div className='m-c-style'>
        <img src={r7} alt='' />
        <div className='meal-details'>
          <h3>Title</h3>
          <p className='meal-description'>Description</p>
          <p className='meal-price'>Price</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
