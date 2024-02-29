import React from 'react';

const NavMenu = () => {
  return (
    <nav className='nav--header'>
      <ul>
        <li>
          <a href='#hero'>Incio</a>
        </li>
        <li>
          <a href='#beneficios'>Producto</a>
        </li>
        <li>
          <a href='/'>Requisitos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
