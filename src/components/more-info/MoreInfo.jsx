import React from 'react';
import Hero from '../../utils/hero/Hero';
import FilterButtons from '../filter-buttons/FilterButtons';

const MoreInfo = () => {
  const cafeDetails = {
    title: 'Cafe Noir',
    desc: 'A casual Parisian-inspired cafe with a lively atmosphere and a wide assortment of eclairs, pastries, and sandwiches',
    rating: '4.7/5',
    showAllStars: false,
    showMoreInfoBtn: false,
    showBackBtn: true,
  };

  return (
    <div>
      <Hero cafeDetails={cafeDetails} />
      <FilterButtons />
    </div>
  );
};

export default MoreInfo;
