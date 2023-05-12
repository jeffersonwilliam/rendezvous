import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './hero.scss';

const Hero = ({ cafeDetails }) => {
  return (
    <div className='hero-container'>
      <div className='hero-img-wrapper'>
        {cafeDetails.showBackBtn === true ? (
          <p className='hero-back-btn'>Back Button</p>
        ) : (
          <></>
        )}

        <div className='two-texts'>
          <p>{cafeDetails?.title}</p>
          <div className='star-ratings'>
            {cafeDetails?.showAllStars === true ? (
              <>
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
              </>
            ) : (
              <>
                <StarOutlineIcon
                  className='hero-star-icons'
                  fontSize='5.125rem'
                  sx={{ color: 'white' }}
                />
              </>
            )}
          </div>
        </div>

        <div className='hero-description'>
          A casual Parisian-inspired cafe with a lively atmosphere and a wide
          assortment of eclairs, pastries, and sandwiches
        </div>
        {cafeDetails?.showMoreInfoBtn === true ? (
          <div id='info-btn-container'>
            <Link to='/more-info'>
              <button className='more-info-button ripple'>
                More info
                <BiRightArrowAlt className='b-arrow' size={20} />
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Hero;
