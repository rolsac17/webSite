import React from 'react';
import DatosSolicitante from '../../components/credit/FrmDatosSolicitante';
import DatosConyugue from '../../components/credit/FrmDatosConyugue';
import DatosBeneficiario from '../../components/credit/FrmDatosBeneficiarios';
import DatosReferenciasFamiliares from '../../components/credit/FrmReferenciasFamiliares';
import DatosReferenciasLaborales from '../../components/credit/FrmReferenciasLaborales';
import DatosReferenciasBancarias from '../../components/credit/FrmReferenciasBancarias';
import '../../assets/styles/components/utils/Forms.scss';
import '../../assets/styles/components/website/BarSteps.scss';

const FormSC1 = () => {
  return (
    <div className='form__wrap'>
      {/* <div className='steps-bar'>
        <svg className='steps-bar__svg'>
          <circle className='steps-bar__circle-fixid' cx='50' cy='50' r='40' />
          <circle className='steps-bar__circle-progress' cx='50' cy='50' r='40' />
          <text className='steps-bar__text' x='50%' y='50%' alignmentBaseline='middle' textAnchor='middle'>1 of 3</text>
        </svg>
        <div>
          <p>Datos Personales</p>
          <span>Next:</span>
          <span>Formulario 2</span>
        </div>
      </div> */}
      <form action=''>
        <div className='form__container'>
          <h1 className='form__title-principal'>Datos principales</h1>
          <DatosSolicitante />
          <DatosConyugue />
          <DatosBeneficiario />
          <DatosReferenciasFamiliares />
          <DatosReferenciasLaborales />
          <DatosReferenciasBancarias />
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

export default FormSC1;
