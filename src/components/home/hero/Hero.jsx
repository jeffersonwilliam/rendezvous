import React from 'react';
import restaurantfront from '../../../assets/restaurantfront.jpg';
import Button from '@mui/material/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
// import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { green } from '@mui/material/colors';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.scss';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});

const Hero = () => {
  return (
    <div>
      <div className='hero-img-wrapper'>
        {/* <img src={restaurantfront} alt='restaurant-front' /> */}
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
        {/* <ThemeProvider theme={theme}>
          <Chip icon={<MdPhone />} label='Call me' />
          <Chip icon={<Icon className='fas fa-phone-alt' />} label='Call me' />
        </ThemeProvider> */}
      </div>
      <Button
        variant='contained'
        sx={{ backgroundColor: '#E1C896', borderRadius: '10px' }}
        startIcon={<FontAwesomeIcon icon={faCamera} />}
      >
        Example
      </Button>
    </div>
  );
};

export default Hero;
