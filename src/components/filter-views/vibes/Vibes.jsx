import React from 'react';
import c1 from '../../../../public/vibeimages/c1.jpg';
import c2 from '../../../../public/vibeimages/c2.jpg';
import './vibes.scss';

const Vibes = () => {
  return (
    <div className='vibes-component'>
      <div className='vibe-bar'>
        <p>Casual</p>
      </div>
      <div className='vibe-blurb'>
        People tend to dress in everyday clothes. No need to dress up. T-shirts
        and jeans are the norm, though don’t dress like a bum.
      </div>

      <div className='vibe-image'>
        <img src={c1} alt='vibe image 1' />
        <img src={c2} alt='vibe image 2' />
      </div>
    </div>
  );
};

export default Vibes;
