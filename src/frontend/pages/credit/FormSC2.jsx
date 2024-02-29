import React from 'react';
import DatosGastosMensuales from '../../components/credit/FrmGastosMensuales';
import DatosEstadoPatrimonial from '../../components/credit/FrmEstadoPatrimonial';
import '../../assets/styles/components/utils/Forms.scss';

const FormSC2 = () => {
  return (
    <div className='form__wrap'>
      <form action=''>
        <div className='form__container'>
          <h1 className='form__title-principal'>Datos sobre gastos</h1>
          <DatosGastosMensuales />
          <DatosEstadoPatrimonial />
        </div>
        <div className='actions'>
          <div className='actions__previuos'>
            <button type='submit'>
              Atras
            </button>
          </div>
          <div className='actions__next'>
            <button type='submit'>
              Siguiente
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSC2;
