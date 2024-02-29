import React, { useState } from 'react';
import '../../assets/styles/components/landign/FormsSection.scss';
import FormSaberMas from './FormSaberMas';
import FormCalcularPagos from './FormCalcularPagos';

const FormsSection = () => {
  const [opcion, setOpcion] = useState(1);

  /** Selecciona la opción de mas información */
  const selectMasInformacion = () => {
    setOpcion(1);
  };

  /** Selecciona la opción de calcula tus pagos */
  const selectCalcularPagos = () => {
    setOpcion(2);
  };

  return (
    <section className='forms'>
      <div className='u-wrapper'>
        <div className='u-container'>
          <h1 className='forms__title'>Elige la opción que mas te interese</h1>
          <div className='forms__tabs'>
            <button type='button' className={opcion === 1 ? 'btn btn-round btn-gray is-active' : 'btn btn-round btn-gray'} onClick={selectMasInformacion}>
              Mas información
            </button>
            <button type='button' className={opcion === 2 ? 'btn btn-round btn-gray is-active' : 'btn btn-round btn-gray'} onClick={selectCalcularPagos}>
              Calcula tus pagos
            </button>
          </div>
        </div>
      </div>
      <div className='u-container'>
        <div className='forms__panels'>
          {opcion === 1 && <FormSaberMas />}
          {opcion === 2 && <FormCalcularPagos />}
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
