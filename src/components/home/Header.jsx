import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header-class'>
      <p className='date-informer'>Your upcoming date with</p>{' '}
      <b className='match-name'> John Doe</b>
    </div>
  );
};

export default Header;
