/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/styles/components/utils/ElementsForm.scss';

const DatosSolicitante = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        {/* Agrupacion datos personales */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Personal</h2>
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
        {/* Apellido de casada */}
        <div className='grid-6 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='apellidoCasada' className='form-group__label'>Apellido de casada</label>
            <input id='apellidoCasada' className='form-group__input' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un apellido correcto</p>
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
        {/* E-mail */}
        <div className='grid-12 grid-sm-8'>
          <div className='form-group'>
            <label htmlFor='correo' className='form-group__label'>Correo electrónico</label>
            <input id='correo' className='form-group__input' type='email' autoComplete='off' maxLength='75' />
            <p className='form-group__error'>Introduzca un correo correcto</p>
          </div>
        </div>
        {/* DPI */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='dpi' className='form-group__label'>Dpi</label>
            <input id='dpi' className='form-group__input' type='text' autoComplete='off' maxLength='20' />
            <p className='form-group__error'>Introduzca un numero correcto</p>
          </div>
        </div>
        {/* Nit */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='nit' className='form-group__label'>NIT</label>
            <input id='nit' className='form-group__input' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un numero correcto</p>
          </div>
        </div>
        {/* genero */}
        <div className='grid-12 grid-sm-6'>
          <label className='form-group__label'>Genero</label>
          <div className='form-group__box'>
            <div className='form-group-radio'>
              <input type='radio' name='genero' id='male' />
              <label htmlFor='male'>Masculino</label>
            </div>
            <div className='form-group-radio'>
              <input type='radio' name='genero' id='female' />
              <label htmlFor='female'>Femenino</label>
            </div>
          </div>
        </div>
        {/* Agrupacion datos de contacto */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Contacto</h2>
          <hr className='line-separation' />
        </div>
        {/* Pais */}
        <div className='grid-12 grid-sm-6'>
          <div className='form-group'>
            <label htmlFor='pais' className='form-group__label'>País</label>
            <select name='pais' id='pais' className='form-group__select'>
              <option value=''> </option>
              <option value=''>Guatemala</option>
            </select>
            <p className='form-group__error'>Selecciona tu pais de origen</p>
          </div>
        </div>
        {/* Departamento */}
        <div className='grid-12 grid-sm-6'>
          <div className='form-group'>
            <label htmlFor='departamento' className='form-group__label'>Departamento</label>
            <select name='departamento' id='departamento' className='form-group__select'>
              <option value=''> </option>
              <option value=''>Guatemala</option>
            </select>
            <p className='form-group__error'>Selecciona tu departamento de origen</p>
          </div>
        </div>
        {/* Municipio */}
        <div className='grid-12 grid-sm-6'>
          <div className='form-group'>
            <label htmlFor='municipio' className='form-group__label'>Municipio</label>
            <select name='municipio' id='municipio' className='form-group__select'>
              <option value=''> </option>
              <option value=''>Guatemala</option>
            </select>
            <p className='form-group__error'>Selecciona tu municipio de origen</p>
          </div>
        </div>
        {/* Direccion de residencia */}
        <div className='grid-12 grid-md-9'>
          <div className='form-group'>
            <label htmlFor='direccion' className='form-group__label'>Dirección de residencia</label>
            <input id='direccion' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
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
        {/* Telefono 2 */}
        <div className='grid-12 grid-sm-3'>
          <div className='form-group'>
            <label htmlFor='telefono1' className='form-group__label'>Teléfono secundario</label>
            <input id='telefono1' className='form-group__input' type='text' autoComplete='off' maxLength='8' placeholder='opcional' />
            <p className='form-group__error'>Introduzca un numero correcta</p>
          </div>
        </div>
        {/* Agrupacion datos de contacto */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Profesion u oficio</h2>
          <hr className='line-separation' />
        </div>
        {/* Profesion */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='profesion' className='form-group__label'>Profesión</label>
            <input id='profesion' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
            <p className='form-group__error'>Introduzca una profesion correcta</p>
          </div>
        </div>
        {/* Actividad económica */}
        <div className='grid-12 grid-xs-4'>
          <label className='form-group__label'>Actividad económica</label>
          <div className='form-group__box'>
            <div className='form-group-checkbox'>
              <input type='checkbox' name='' id='agricultor' />
              <label htmlFor='agricultor'>Agricultos</label>
            </div>
            <div className='form-group-checkbox'>
              <input type='checkbox' name='' id='comerciante' />
              <label htmlFor='comerciante'>Comerciante</label>
            </div>
            <div className='form-group-checkbox'>
              <input type='checkbox' name='' id='empresario' />
              <label htmlFor='empresario'>Empresario</label>
            </div>
          </div>
        </div>
        {/* Agrupacion Estado civil */}
        <div className='grid-12'>
          <h2 className='form__title-group'>Estado civil</h2>
          <hr className='line-separation' />
        </div>
        {/* Estado civil */}
        <div className='grid-12 grid-sm-6'>
          <label className='form-group__label'>Estado civil</label>
          <div className='form-group__box'>
            <div className='form-group-radio'>
              <input type='radio' name='estadoCivil' id='married' />
              <label htmlFor='married'>Casado(a)</label>
            </div>
            <div className='form-group-radio'>
              <input type='radio' name='estadoCivil' id='single' />
              <label htmlFor='single'>Soltero(a)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosSolicitante;
