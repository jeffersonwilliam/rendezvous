import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { BiRightArrowAlt } from 'react-icons/bi';
import './hero.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-img-wrapper'>
        <div className='two-texts'>
          <p>Cafe Noir</p>
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

        <div className='hero-description'>
          A casual Parisian-inspired cafe with a lively atmosphere and a wide
          assortment of eclairs, pastries, and sandwiches
        </div>
        <div id='info-btn-container'>
          <button className='more-info-button ripple' onClick={''}>
            More info
            <BiRightArrowAlt className='b-arrow' size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
