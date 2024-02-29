/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/utils/Header.scss';

const Header = () => {
  const [isOpenMenuMovil, setIsOpenMenuMovil] = useState(false);

  const toggleBotton = () => {
    if (isOpenMenuMovil) {
      setIsOpenMenuMovil(false);
    } else {
      setIsOpenMenuMovil(true);
    }
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <figure>
            <img src='https://fileserver.tonantel.com/53eb4b95fc1bf2c73181712e06ba2cc8138468aea5906faa5c7eb3aa09ae744bLogo-nav-white.svg' alt='Logo' />
          </figure>
        </Link>
      </div>
      <div className='nav-header'>
        <nav className='menu'>
          <div className='menu__dropdown is-mobil'>
            <button className={isOpenMenuMovil ? 'menu__dropdown--button icon_closed' : 'menu__dropdown--button icon_open'} type='button' onClick={toggleBotton} />
          </div>
          {/* la clase is-open lo desplega*/}
          <div className={isOpenMenuMovil ? 'menu__content is-open' : 'menu__content'}>
            {/* <ul className='menu__items'>
              <li className='menu__items--link'><a href='/'>Vision y Mision</a></li>
              <li className='menu__items--link'><a href='/'>Quienes somos?</a></li>
              <li className='menu__items--link'><a href='/'>Agencias y Agentes Micoope</a></li>
              <li className='menu__items--link'><a href='/'>Empleos</a></li>
            </ul> */}
            {/* nav de productos en mobil */}
            <div className='nav-products is-mobil'>
              <h3 className='title--products'>Productos</h3>
              <div className='nav-products__container'>
                {/* Ahorros */}
                <div className='nav-products__items'>
                  <Link
                    to='/productos'
                    onClick={() => {
                      sessionStorage.setItem('productoCategoriaId', 1);
                      toggleBotton();
                    }}
                  >
                    <figure className='nav-products__icon'>
                      <img src='https://fileserver.tonantel.com/6e9d0940f86b850327ac4bc39ab27a458a9453db2d6b1d2cd6d75f0e40e84c80i-ahorros.svg' alt='Icoon' />
                    </figure>
                    <h3 className='nav-products__title'>Ahorros</h3>
                  </Link>
                </div>
                {/* Prestamos */}
                <div className='nav-products__items'>
                  <Link
                    to='/productos'
                    onClick={() => {
                      sessionStorage.setItem('productoCategoriaId', 2);
                      toggleBotton();
                    }}
                  >
                    <figure className='nav-products__icon'>
                      <img src='https://fileserver.tonantel.com/8216d6265b0704ccac4de6deb12995c7fc180d4f57418576539f7f8feab41c2fi-prestamos.svg' alt='Icoon' />
                    </figure>
                    <h3 className='nav-products__title'>Prestamos</h3>
                  </Link>
                </div>
                {/* Tarjetas Crédito/Debito */}
                <div className='nav-products__items'>
                  <Link
                    to='/productos'
                    onClick={() => {
                      sessionStorage.setItem('productoCategoriaId', 3);
                      toggleBotton();
                    }}
                  >
                    <figure className='nav-products__icon'>
                      <img src='https://fileserver.tonantel.com/04daff35c4ac254bf71231c077ad6b931fcdfddce7b2c242c7da09e01b18666ai-tarjetas.svg' alt='Icoon' />
                    </figure>
                    <h3 className='nav-products__title'>Tarjetas</h3>
                  </Link>
                </div>
                {/* Seguros */}
                <div className='nav-products__items'>
                  <Link
                    to='/productos'
                    onClick={() => {
                      sessionStorage.setItem('productoCategoriaId', 4);
                      toggleBotton();
                    }}
                  >
                    <figure className='nav-products__icon'>
                      <img src='https://fileserver.tonantel.com/f35970efdeab00ce0bdceb43fbaaf828cbac593fd94e05772c8937996a394a39i-seguros.svg' alt='Icoon' />
                    </figure>
                    <h3 className='nav-products__title'>Seguros</h3>
                  </Link>
                </div>
                {/* Cotizador financiero */}
                {/* <div className='nav-products__items'>
                  <a href='/'>
                    <figure className='nav-products__icon'>
                      <img src='https://fileserver.tonantel.com/7dc8abedc8834e5295d6c460ecb275e10b94e6380ec7306649ab5707c6468c06i-cotizador.svg' alt='Icoon' />
                    </figure>
                    <h3 className='nav-products__title'>Cotizador financiero</h3>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
        {/* <div className='actions'>
          <a href='/home' className='btn btn-login btn-small btn-round'>Iniciar sesion</a>
        </div> */}
      </div>
      <div className='nav-products is-desktop'>
        <div className='nav-products__container'>
          {/* Ahorros */}
          <div className='nav-products__items'>
            <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 1); }}>
              <figure className='nav-products__icon'>
                <img src='https://fileserver.tonantel.com/6e9d0940f86b850327ac4bc39ab27a458a9453db2d6b1d2cd6d75f0e40e84c80i-ahorros.svg' alt='Icoon' />
              </figure>
              <h3 className='nav-products__title'>Ahorros</h3>
            </Link>
          </div>
          {/* Prestamos */}
          <div className='nav-products__items'>
            <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 2); }}>
              <figure className='nav-products__icon'>
                <img src='https://fileserver.tonantel.com/8216d6265b0704ccac4de6deb12995c7fc180d4f57418576539f7f8feab41c2fi-prestamos.svg' alt='Icoon' />
              </figure>
              <h3 className='nav-products__title'>Prestamos</h3>
            </Link>
          </div>
          {/* Tarjetas Crédito/Debito */}
          <div className='nav-products__items'>
            <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 3); }}>
              <figure className='nav-products__icon'>
                <img src='https://fileserver.tonantel.com/04daff35c4ac254bf71231c077ad6b931fcdfddce7b2c242c7da09e01b18666ai-tarjetas.svg' alt='Icoon' />
              </figure>
              <h3 className='nav-products__title'>Tarjetas</h3>
            </Link>
          </div>
          {/* Seguros */}
          <div className='nav-products__items'>
            <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 4); }}>
              <figure className='nav-products__icon'>
                <img src='https://fileserver.tonantel.com/f35970efdeab00ce0bdceb43fbaaf828cbac593fd94e05772c8937996a394a39i-seguros.svg' alt='Icoon' />
              </figure>
              <h3 className='nav-products__title'>Seguros</h3>
            </Link>
          </div>
          {/* Cotizador financiero */}
          {/* <div className='nav-products__items'>
            <a href='/'>
              <figure className='nav-products__icon'>
                <img src='https://fileserver.tonantel.com/7dc8abedc8834e5295d6c460ecb275e10b94e6380ec7306649ab5707c6468c06i-cotizador.svg' alt='Icoon' />
              </figure>
              <h3 className='nav-products__title'>Cotizador financiero</h3>
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
