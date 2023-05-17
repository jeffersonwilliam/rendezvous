import React from 'react';
import Hero from '../../utils/hero/Hero';
import ImageCarousel from '../filter-views/details/image-carousel/ImageCarousel';
import FilterButtons from '../filter-buttons/FilterButtons';
import VenueDetails from '../../utils/venuedetails/VenueDetails';
import Menu from '../filter-views/menu/Menu';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

const MoreInfo = () => {
  const cafeDetails = {
    title: 'Cafe Noir',
    desc: 'A casual Parisian-inspired cafe with a lively atmosphere and a wide assortment of eclairs, pastries, and sandwiches',
    rating: '4.7/5',
    showAllStars: false,
    showMoreInfoBtn: false,
    showBackBtn: true,
  };

  const currentView = useSelector((state) => state.view.currentView);

  const handleRender = () => {
    if (currentView === 'details') {
      return (
        <>
          <ImageCarousel />
          <VenueDetails />
        </>
      );
    } else if (currentView === 'menu') {
      return (
        <>
          <Menu />
        </>
      );
    } else if (currentView === 'vibes') {
      return <>Vibes</>;
    } else if (currentView === 'reviews') {
      return <>Reviews</>;
    } else {
      return (
        <>
          <ImageCarousel />
          <VenueDetails />
        </>
      );
    }
  };

  return (
    <div>
      <Hero cafeDetails={cafeDetails} />
      <FilterButtons />
      {handleRender()}
    </div>
  );
};

export default MoreInfo;
