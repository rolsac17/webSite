import React from 'react';
import '../../assets/styles/components/landign/Footer.scss';
import Icon from 'icomoon-react';
import iconSet from '../../assets/Icoom/selection.json';

const Footer = ({ fileurl }) => {
  return (
    <footer className='LFooter'>
      <div className='LFooter__container'>
        <div className='LFooter__up'>
          <div className='info'>
            <div className='info__group'>
              <h3 className='info__title'>Horarios</h3>
              <p className='info__description'>
                Lunes a Viernes de 8 a 16 horas
                <br />
                Sábado y Domingo de 8 a 12 horas
              </p>
            </div>
            <div className='info__group'>
              <h3 className='info__title'>Ubicación</h3>
              <p className='info__description'>Nueva Santa Rosa, Barberena, Mataquescuintla, Aldea Ayarza Casillas, Jalapa, Jutiapa, Santa Catarina Mita Jutiapa, Agua Blanca Jutiapa, Chiquimulilla, Santa Elena Barillas, Aldea el Jocotillo Villa Canales, Fraijanes, San José Pinula, Palencia y en CC Los próceres en la ciudad capital.</p>
            </div>
          </div>
          <div className='LSocial'>
            <h3 className='LSocial__title'>Nuestros Medios de Contacto</h3>
            <a target='_blanck' href='https://es-la.facebook.com/micoopetonantel/' className='LSocial__link'>
              {/* <span className='icon-facebook' /> */}
              <Icon iconSet={iconSet} color='#ffffff' size={14} icon='facebook' />
            </a>
            <a target='_blanck' href='https://www.instagram.com/micoopetonantel/' className='LSocial__link'>
              {/* <span className='icon-instagram' /> */}
              <Icon iconSet={iconSet} color='#ffffff' size={14} icon='instagram' />
            </a>
            <a target='_blanck' href='https://api.whatsapp.com/send?phone=50230178570&text=Hola!%20Te%20interesa%20nuestro%20producto!' className='LSocial__link'>
              {/* <span className='icon-whatsapp' /> */}
              <Icon iconSet={iconSet} color='#ffffff' size={14} icon='whatsapp' />
            </a>
            <p className='LSocial__pbx'>PBX: (502) 7931-9797</p>
          </div>
          <div className='logo'>
            <figure>
              <img src={`${fileurl}/ca2f0d5bb3c5631a42696353622f0b74a75dbae5163a006f55ef81e273629efblogo-white.svg`} alt='Logo Tonantel R.L' />
            </figure>
          </div>
        </div>
        <div className='LFooter__down'>
          <p className='LFooter__down--description'>© 2020 Cooperativa Tonantel. Derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
