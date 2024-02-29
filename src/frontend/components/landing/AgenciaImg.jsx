import React from 'react';
import '../../assets/styles/components/landign/AgenciaImg.scss';

const AgenciaImg = ({ fileurl }) => {
  return (
    <section className='agencia'>
      <figure className='agencia-img__container'>
        <img src={`${fileurl}/8579c16603d9ea5653d00b1527d5d7383109e72cfbc112fcafff07e7f34df25ftonantel.svg`} alt='' />
      </figure>
    </section>
  );
};

export default AgenciaImg;
