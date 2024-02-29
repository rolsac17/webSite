/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmReferenciasBancarias = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        {/* Agrupacion datos referencias bancarias */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Referencias bancarias</h2>
          <hr className='line-separation' />
        </div>
        {/* Nombre de la institucion */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='institucion' className='form-group__label'>Nombre de la institucion</label>
            <input id='institucion' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
            <p className='form-group__error'>Introduzca una direccion correcta</p>
          </div>
        </div>
        {/* Telefono 1 */}
        <div className='grid-12 grid-sm-3'>
          <div className='form-group'>
            <label htmlFor='telefono' className='form-group__label'>Teléfono</label>
            <input id='telefono' className='form-group__input' type='text' autoComplete='off' maxLength='8' />
            <p className='form-group__error'>Introduzca un numero correcta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmReferenciasBancarias;
