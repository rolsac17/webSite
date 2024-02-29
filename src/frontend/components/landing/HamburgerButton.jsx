import React from 'react';

const HamburgerButton = () => {
  return (
    <button className='hamburger-button' type='button'>
      <span className='line-top' />
      <span className='line-middle' />
      <span className='line-bottom' />
    </button>
  );
};

export default HamburgerButton;
