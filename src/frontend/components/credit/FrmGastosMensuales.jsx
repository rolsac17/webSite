/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmGastosMensuales = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        <div className='grid-12'>
          {/* Agrupacion datos referencias bancarias */}
          <h2 className='form__title-group'>Gastos Básicos Mensuales</h2>
          <hr className='line-separation' />
        </div>
        {/* Alimentación */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='alimentacion' className='form-group__label'>Alimentación</label>
            <input id='alimentacion' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Vesturario */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='vestuario' className='form-group__label'>Vestuario</label>
            <input id='vestuario' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Calzado*/}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='calzado' className='form-group__label'>Calzado</label>
            <input id='calzado' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Agua */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='agua' className='form-group__label'>Agua</label>
            <input id='agua' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Luz */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='luz' className='form-group__label'>Luz</label>
            <input id='luz' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Teléfono */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='telefono' className='form-group__label'>Teléfono</label>
            <input id='telefono' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* TV Cable */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='tv' className='form-group__label'>TV Cable</label>
            <input id='tv' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Medicinas */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='medicinas' className='form-group__label'>Medicinas</label>
            <input id='meicionas' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Transporte */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='trasnporte' className='form-group__label'>Transporte</label>
            <input id='trasnporte' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Utiles */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='utiles' className='form-group__label'>Útiles escolares</label>
            <input id='utiles' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Educación */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='educacion' className='form-group__label'>Educación</label>
            <input id='educacion' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Imprevistos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='imprevisto' className='form-group__label'>Imprevistos</label>
            <input id='imprevisto' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Vivienda */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='vivienda' className='form-group__label'>Vivienda</label>
            <input id='vivienda' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Combustible */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='combustible' className='form-group__label'>Combustible</label>
            <input id='combustible' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Otros */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='otros' className='form-group__label'>Otros</label>
            <input id='otros' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmGastosMensuales;
