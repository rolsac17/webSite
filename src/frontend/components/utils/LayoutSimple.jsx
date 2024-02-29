import React from 'react';
import '../../assets/styles/components/utils/LayoutSimple.scss';
import '../../assets/styles/components/utils/Header.scss';
import { Link } from 'react-router-dom';

const LayoutSimple = ({ children }) => {
  return (
    <div className='layout-simple'>
      <header className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <figure>
              <img src='https://fileserver.tonantel.com/53eb4b95fc1bf2c73181712e06ba2cc8138468aea5906faa5c7eb3aa09ae744bLogo-nav-white.svg' alt='Logo' />
            </figure>
          </Link>
        </div>
      </header>
      <div>
        {children}
      </div>
    </div>
  );
};

export default LayoutSimple;
