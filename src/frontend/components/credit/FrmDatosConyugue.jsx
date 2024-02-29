/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmDatosConyugue = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        <div className='grid-12'>
          <h2 className='form__title-group'>Datos del cónyuge</h2>
          <hr className='line-separation' />
        </div>
        {/* Nombres */}
        <div className='grid-12 grid-sm-6'>
          <div className='two'>
            <div className='form-group'>
              <label htmlFor='primerNombre' className='form-group__label'>Primer nombre</label>
              <input id='primerNombre' className='form-group__input border-none-r' type='text' autoComplete='off' maxLength='45' />
              <p className='form-group__error'>Introduzca un nombre correcto</p>
            </div>
            <div className='form-group'>
              <label htmlFor='segundoNombre' className='form-group__label'>Segundo nombre</label>
              <input id='segundoNombre' className='form-group__input border-none-l' type='text' autoComplete='off' maxLength='45' />
              <p className='form-group__error'>Introduzca un nombre correcto</p>
            </div>
          </div>
        </div>
        {/* Apellidos */}
        <div className='grid-12 grid-sm-6'>
          <div className='two'>
            <div className='form-group'>
              <label htmlFor='primerApellido' className='form-group__label'>Primer apellido</label>
              <input id='primerApellido' className='form-group__input border-none-r' type='text' autoComplete='off' maxLength='45' />
              <p className='form-group__error'>Introduzca un apellido correcto</p>
            </div>
            <div className='form-group'>
              <label htmlFor='segundoApellido' className='form-group__label'>Segundo apellido</label>
              <input id='segundoApellido' className='form-group__input border-none-l' type='text' autoComplete='off' maxLength='45' />
              <p className='form-group__error'>Introduzca un apellido correcto</p>
            </div>
          </div>
        </div>
        {/* Ocupación */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='ocupacion' className='form-group__label'>Ocupación</label>
            <input id='ocupacion' className='form-group__input' type='text' autoComplete='off' maxLength='75' />
            <p className='form-group__error'>Introduzca una cupación correcta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmDatosConyugue;
