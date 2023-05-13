import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './hero.scss';

const Hero = ({ cafeDetails }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <div className='hero-container'>
      <div className='hero-img-wrapper'>
        {cafeDetails.showBackBtn === true ? (
          <MdArrowBack className='hero-back-btn' onClick={handleClick} />
        ) : (
          <></>
        )}

        <div className='two-texts'>
          {cafeDetails?.showAllStars === true ? (
            <div className='title-and-ratings'>
              <p className='hero-title'>{cafeDetails?.title}</p>
            </div>
          ) : (
            <div className='title-and-ratings'>
              <div className='hero-title'>
                <p>{cafeDetails?.title}</p>
                <p id='rating-val'>{cafeDetails?.rating}</p>
              </div>
            </div>
          )}

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

        <div className='hero-description'>{cafeDetails?.desc}</div>
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
