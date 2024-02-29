import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/website/Footer.scss';
import Icon from 'icomoon-react';
import iconSet from '../../assets/Icoom/selection.json';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='u-wrapper'>
        <div className='u-container'>
          <div className='footer__contact'>
            <h2 className='footer__contact--title'>Quieres ser parte de nuestra gran familia TONANTEL?</h2>
            {/* <div className='footer__contact--actions'>
              <a href='/home' className='btn btn-round btn-uppercase btn-green'>contactanos</a>
              <a href='/home' className='btn btn-round btn-uppercase btn-white'>crea tu usuario</a>
            </div> */}
          </div>
          <div className='footer__main'>
            <div className='social'>
              <p className='social__title'>Siguenos en</p>
              <a target='_blanck' href='https://es-la.facebook.com/micoopetonantel/' className='footer__social--link'>
                {/* <span className='icon-facebook' /> */}
                <Icon iconSet={iconSet} color='#a2acba' size={14} icon='facebook' />
              </a>
              <a target='_blanck' href='https://www.instagram.com/micoopetonantel/' className='footer__social--link'>
                {/* <span className='icon-instagram' /> */}
                <Icon iconSet={iconSet} color='#a2acba' size={14} icon='instagram' />
              </a>
              <p className='social__pbx'>
                <strong>PBX:</strong>
                7931-9797
              </p>
              <p className='social__pbx'>
                <strong>Whatsapp:</strong>
                3017-8570
              </p>
            </div>
            <div className='hours'>
              <p className='u-title-footer'>Horarios</p>
              <ul className='hours__list'>
                <li className='hours__list--items'>Lunes a viernes 9:00am a 17:00pm</li>
                <li className='hours__list--items'>Sábado y domingo de 9:00am a 13:00pm</li>
              </ul>
            </div>
            <div className='items'>
              <p className='u-title-footer'>Productos</p>
              <ul className='items__list'>
                <li className='items__list--item'>
                  <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 1); }}>
                    Ahorros
                  </Link>
                </li>
                <li className='items__list--item'>
                  <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 2); }}>
                    Prestamos
                  </Link>
                </li>
                <li className='items__list--item'>
                  <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 3); }}>
                    Tarjetas
                  </Link>
                </li>
                <li className='items__list--item'>
                  <Link to='/productos' onClick={() => { sessionStorage.setItem('productoCategoriaId', 4); }}>
                    Seguros
                  </Link>
                </li>
                {/* <li className='items__list--item'><a href='/home'>Cotizador financiero</a></li> */}
              </ul>
            </div>
            <div className='items'>
              <p className='u-title-footer'>Enlaces</p>
              <ul className='items__list'>
                <li className='items__list--item'>
                  <a href='https://solicitudes.micoope.com.gt/Solicitud.php'>
                    Actualización de Datos
                  </a>
                </li>
                <li className='items__list--item'>
                  <a href='https://micoopeenlinea.com.gt/'>
                    Micoope en Línea
                  </a>
                </li>
                <li className='items__list--item'>
                  <a href='https://issuu.com/cooperativa-tonantel/docs/memoria_de_labores-2021'>
                    Memoria de Labores 2021!
                  </a>
                </li>
                {/* <li className='items__list--item'><a href='/home'>Cotizador financiero</a></li> */}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className='footer__down'>
        <p className='footer__down--description'>© 2020 Cooperativa Tonantel. Derechos reservados</p>
      </div>
    </footer>
  );
};
export default Footer;
