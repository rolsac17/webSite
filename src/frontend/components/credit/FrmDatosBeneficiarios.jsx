/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmDatosBeneficiario = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        {/* Agrupacion datos del beneficiario */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Datos del beneficiarion de la cuenta</h2>
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
        {/* Parentesco */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='parentesco' className='form-group__label'>Parentesco</label>
            <select name='parentesco' id='parentesco' className='form-group__select'>
              <option value=''> </option>
              <option value=''>Dama de compania</option>
            </select>
            <p className='form-group__error'>Selecciona el parentesco</p>
          </div>
        </div>
        {/* Fecha de nacimiento */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='fNacimiento' className='form-group__label'>Fecha de Nacimiento</label>
            <input id='fNacimiento' className='form-group__input' type='date' />
            <p className='form-group__error'>Introduzca una fecha correcto</p>
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
        {/* Telefono 2 */}
        <div className='grid-12 grid-sm-3'>
          <div className='form-group'>
            <label htmlFor='telefono1' className='form-group__label'>Teléfono secundario</label>
            <input id='telefono1' className='form-group__input' type='text' autoComplete='off' maxLength='8' placeholder='opcional' />
            <p className='form-group__error'>Introduzca un numero correcta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmDatosBeneficiario;
