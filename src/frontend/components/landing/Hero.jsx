import React from 'react';
import '../../assets/styles/components/landign/Hero.scss';
import '../../assets/styles/components/website/Hero.scss';
import { connect } from 'react-redux';

const Hero = (props) => {
  const { categoria, nombre, descripcion, fileurl, logo } = props;
  return (
    <section className='hero' style={{ backgroundImage: `url(${fileurl}/${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '575px' }}>
      <div className='hero__content'>
        <div className='hero__container'>
          <h1 className='hero__title'>{`${categoria} ${nombre}`}</h1>
          <p className='hero__description'>{descripcion}</p>
          {/* <a href='/home' className='btn btn-round btn-green btn-uppercase'>Saber Mas</a> */}
        </div>
      </div>
      <div className='u-curver text-light'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='currentColor'><polygon points='0,100 100,0 100,100' /></svg>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    fileurl: state.producto.fileurl,
    nombre: state.producto.nombre,
    descripcion: `${state.producto.descripcion}`,
    categoria: state.producto.lp_categorium.nombre,
    logo: state.producto.logo,
  };
};

export default connect(mapStateToProps, null)(Hero);
