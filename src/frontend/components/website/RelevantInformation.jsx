import React from 'react';
import '../../assets/styles/components/website/RelevantInformation.scss';

const RelevantIformation = () => {
  return (
    <section className='relevant-information'>
      <div className='u-wrapper'>
        <div className='relevant-information__container'>
          <div className='relevant-information__content'>
            <article className='relevant-information__item'>
              <figure className='relevant-information__item--container-img'>
                <img src='' alt='Beneficios' />
              </figure>
              <h3 className='relevant-information__item--title'>Mayores beneficios</h3>
              <p className='relevant-information__item--description'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</p>
            </article>
            <article className='relevant-information__item'>
              <figure className='relevant-information__item--container-img'>
                <img src='' alt='Beneficios' />
              </figure>
              <h3 className='relevant-information__item--title'>Mayores beneficios</h3>
              <p className='relevant-information__item--description'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</p>
            </article>
            <article className='relevant-information__item'>
              <figure className='relevant-information__item--container-img'>
                <img src='' alt='Beneficios' />
              </figure>
              <h3 className='relevant-information__item--title'>Mayores beneficios</h3>
              <p className='relevant-information__item--description'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</p>
            </article>
          </div>
        </div>
      </div>
      <div className='u-curver text-lightGreen'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144.54 17.34' preserveAspectRatio='none' fill='currentColor'><path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' /></svg>
      </div>
    </section>
  );
};

export default RelevantIformation;
