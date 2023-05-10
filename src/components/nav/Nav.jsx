import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BiHomeAlt, BiUser, BiSearch } from 'react-icons/bi';
import { MdSos } from 'react-icons/md';
import './nav.scss';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      {/* <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <BiSearch />
      </a> */}
      <a
        href='#search'
        onClick={() => setActiveNav('#search')}
        className={activeNav === '#search' ? 'active' : ''}
      >
        <BiSearch />
      </a>
      <a
        href='#home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <BiHomeAlt />
      </a>
      <a
        href='#add-date'
        onClick={() => setActiveNav('#add-date')}
        className={activeNav === '#add-date' ? 'active' : ''}
      >
        <BsPlusCircleFill />
      </a>
      <a
        href='#sos'
        onClick={() => setActiveNav('#sos')}
        className={activeNav === '#sos' ? 'active' : ''}
      >
        <MdSos />
      </a>
      <a
        href='#user'
        onClick={() => setActiveNav('#user')}
        className={activeNav === '#user' ? 'active' : ''}
      >
        <BiUser />
      </a>
    </nav>
  );
};

export default Nav;
