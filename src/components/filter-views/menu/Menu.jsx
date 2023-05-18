import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from './MenuCard';
import meals from '../../../fixtures/meals.json';
import './menu.scss';

const tabs = [
  { label: 'Appetizers' },
  { label: 'Pastries' },
  { label: 'Specials' },
  { label: 'Soups' },
  { label: 'Salad' },
];

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleMenuRender = (label) => {
    if (label === 'Pastries') {
      return (
        <>
          <MenuCard mealtype={meals[0].menu.pastries} />
        </>
      );
    } else if (label === 'Specials') {
      return (
        <>
          <MenuCard mealtype={meals[0].menu.specials} />
        </>
      );
    } else if (label === 'Soups') {
      return (
        <>
          <MenuCard mealtype={meals[0].menu.soups} />
        </>
      );
    } else if (label === 'Appetizers') {
      return (
        <>
          <MenuCard mealtype={meals[0].menu.appetizers} />
        </>
      );
    } else if (label === 'Salad') {
      return (
        <>
          <MenuCard mealtype={meals[0].menu.salad} />
        </>
      );
    }
  };

  return (
    <div className='bod'>
      <div className='window'>
        <div className='anim-nav'>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? 'selected' : ''}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
                {item === selectedTab ? (
                  <motion.div className='underline' layoutId='underline' />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <main>
          <AnimatePresence mode='wait'>
            <motion.div
              className='m-div'
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? handleMenuRender(selectedTab.label) : '😋'}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Menu;
