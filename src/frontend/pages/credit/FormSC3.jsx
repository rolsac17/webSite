import React from 'react';
import DatosInformacionAsalariado from '../../components/credit/FrmInformacionAsalariado';
import DatosInformacionEmpresarial from '../../components/credit/FrmInformacionEmpresarial';
import '../../assets/styles/components/utils/Forms.scss';

const FormSC3 = () => {
  return (
    <div className='form__wrap'>
      <form action=''>
        <div className='form__container'>
          <h1 className='form__title-principal'>Información económica</h1>
          <DatosInformacionAsalariado />
          <DatosInformacionEmpresarial />
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

export default FormSC3;
