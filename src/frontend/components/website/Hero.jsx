import React from 'react';
import '../../assets/styles/components/website/Hero.scss';

const Hero = () => {
  return (
    <section className='hero' style={{ backgroundImage: 'url(https://fileserver.tonantel.com/c7a4a0d9fc78ef0186b39a7fb2428505598b16d601fcb9e9a8068a7f77c607aaportada-web.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '575px' }}>
      <div className='hero__content'>
        <div className='hero__container'>
          <h1 className='hero__title'>Cooperativa Tonantel R.L</h1>
          <p className='hero__description'>Somos el sistema cooperativo financiero que mejora la calidad de vida de los Asociados y las comunidades de Guatemala.</p>
          {/* <a href='/home' className='btn btn-round btn-green btn-uppercase'>Saber Mas</a> */}
        </div>
      </div>
      <div className='u-curver text-lightGreen'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144.54 17.34' preserveAspectRatio='none' fill='currentColor'><path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' /></svg>
      </div>
    </section>
  );
};
export default Hero;
