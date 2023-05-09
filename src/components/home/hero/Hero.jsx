import React from 'react';
import restaurantfront from '../../../assets/restaurantfront.jpg';
import Button from '@mui/material/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './hero.scss';

const Hero = () => {
  return (
    <div>
      <div className='hero-img-wrapper'>
        {/* <img src={restaurantfront} alt='restaurant-front' /> */}
        <div className='two-texts'>
          <p>Cafe Noir</p>
          {/* <div className='hero-star-icons'>Star</div> */}
          <div className='star-ratings'>
            <StarOutlineIcon
              className='hero-star-icons'
              fontSize='5.125rem'
              sx={{ color: 'white' }}
            />
            <StarOutlineIcon
              className='hero-star-icons'
              fontSize='5.125rem'
              sx={{ color: 'white' }}
            />
            <StarOutlineIcon
              className='hero-star-icons'
              fontSize='5.125rem'
              sx={{ color: 'white' }}
            />
            <StarOutlineIcon
              className='hero-star-icons'
              fontSize='5.125rem'
              sx={{ color: 'white' }}
            />
            <StarOutlineIcon
              className='hero-star-icons'
              fontSize='5.125rem'
              sx={{ color: 'white' }}
            />
          </div>
        </div>

        {/* <StarOutlineIcon className='hero-star-icons' fontSize='large' sx={{ color: 'red' }} /> */}
        {/* <div className='hero-overlay'>
          <p>Cafe Noir</p>
          <StarOutlineIcon fontSize='large' sx={{ color: 'red' }} />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
