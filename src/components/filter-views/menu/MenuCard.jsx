import React from 'react';
import './MenuCard.scss';

const MenuCard = ({ mealtype }) => {
  return (
    <div>
      {mealtype.map((meal, index) => {
        return (
          <div key={index} className='m-c-style'>
            <img src={meal?.image} alt='' />
            <div className='meal-details'>
              <h3>{meal?.title}</h3>
              <p className='meal-description'>{meal?.description}</p>
              <p className='meal-price'>{meal?.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
