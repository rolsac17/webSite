import React from 'react';
import '../../assets/styles/components/website/NavAside.scss';
import logonext from '../../assets/images/next.svg';
import logodone from '../../assets/images/check.svg';

const NavLeftNext = () => {
  return (
    <nav className='nav-aside'>
      <a href='/'>
        <div className='nav-aside__items is-done'>
          <div className='nav-aside__wrap'>
            <div className='nav-aside__circle'>
              <figure className='nav-aside__circle-inner'>
                <img src={logodone} alt='sd' />
              </figure>
            </div>
            <span className='nav-aside__title'>Cotización</span>
          </div>
          <div className='nav-aside__line' />
        </div>
      </a>
      <a href='/'>
        <div className='nav-aside__items is-active'>
          <div className='nav-aside__wrap'>
            <div className='nav-aside__circle'>
              <figure className='nav-aside__circle-inner'>
                <img src={logonext} alt='sd' />
              </figure>
            </div>
            <span className='nav-aside__title'>Sign Up</span>
          </div>
          <div className='nav-aside__line' />
        </div>
      </a>
      <a href='/'>
        <div className='nav-aside__items'>
          <div className='nav-aside__wrap'>
            <div className='nav-aside__circle'>
              <figure className='nav-aside__circle-inner'>
                <img src='' alt='sd' />
              </figure>
            </div>
            <span className='nav-aside__title'>Solicitud</span>
          </div>
        </div>
      </a>
    </nav>
  );
};

export default NavLeftNext;
