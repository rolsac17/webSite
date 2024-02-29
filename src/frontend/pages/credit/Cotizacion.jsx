/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/styles/components/utils/Forms.scss';

const Cotizacion = () => {
  return (
    <div className='form__wrap'>
      <form action=''>
        <div className='form__container'>
          <div className='container-strech'>
            <div className='grid'>
              <div className='grid-12'>
                <h1 className='form__title-principal'>Cotizacion</h1>
                <hr className='line-separation' />
              </div>
              {/* DPI */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='dpi' className='form-group__label'>Dpi</label>
                  <input id='dpi' className='form-group__input' type='text' autoComplete='off' maxLength='20' />
                  <p className='form-group__error'>Introduzca un numero correcto</p>
                </div>
              </div>
              {/* Frecuencia de pago */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='frecuenciaPago' className='form-group__label'>Frecuencia de Pago</label>
                  <select name='frecuenciaPago' id='frecuenciaPago' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Regular</option>
                  </select>
                  <p className='form-group__error'>Selecciona tu pais de origen</p>
                </div>
              </div>
              {/* Moneda */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='moneda' className='form-group__label'>Moneda</label>
                  <select name='moneda' id='moneda' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Quetzal</option>
                  </select>
                  <p className='form-group__error'>Selecciona tu pais de origen</p>
                </div>
              </div>
              {/* Tipo de credito */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='tipoCredito' className='form-group__label'>Tipo de crédito</label>
                  <select name='tipoCredito' id='tipoCredito' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Agricola</option>
                  </select>
                  <p className='form-group__error'>Selecciona tu pais de origen</p>
                </div>
              </div>
              {/* Destido de fondos */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='destinoFondos' className='form-group__label'>Destino de fondos</label>
                  <select name='destinoFondos' id='destinoFondos' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Consumo</option>
                  </select>
                  <p className='form-group__error'>Selecciona tu pais de origen</p>
                </div>
              </div>
              {/* Monto a solicitar */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='montoSolicitar' className='form-group__label'>Monto a solicitar</label>
                  <input id='montoSolicitar' className='form-group__input' type='text' autoComplete='off' maxLength='13' placeholder='100,000,000' />
                  <p className='form-group__error'>Introduzca un monto correcto</p>
                </div>
              </div>
              {/* Plazp */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='plazo' className='form-group__label'>Plazo (Meses)</label>
                  <input id='plazo' className='form-group__input' type='text' autoComplete='off' maxLength='13' placeholder='0' />
                  <p className='form-group__error'>Introduzca un plazo correcto</p>
                </div>
              </div>
              {/* Cuota estmiada*/}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='cuentaEstimada' className='form-group__label'>Cuota estimada</label>
                  <input id='cuentaEstimada' className='form-group__input' type='text' autoComplete='off' maxLength='13' placeholder='5,000' />
                  <p className='form-group__error'>Introduzca la cuota que estimas pagar</p>
                </div>
              </div>
              {/* Cuota pagarn */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='cuotaPagar' className='form-group__label'>Cuota a Pagar</label>
                  <input id='cuotaPagar' className='form-group__input' type='text' autoComplete='off' maxLength='13' />
                  <p className='form-group__error'>Introduzca la cuota que estimas pagar</p>
                </div>
              </div>
              {/* Uso del credito */}
              <div className='grid-12'>
                <div className='form-group'>
                  <label htmlFor='usoEspecifico' className='form-group__label'>Uso Especifico</label>
                  <textarea className='form-group__textArea' name='usoEspecifico' id='usoEspecifico' rows='3' maxLength='255' />
                  <p className='form-group__error'>Indique el uso que le dara al capital obenido</p>
                </div>
              </div>
              {/* Saldo de créditos actuales */}
              <div className='grid-12 grid-sm-4'>
                <div className='form-group'>
                  <label htmlFor='saldoCreditos' className='form-group__label'>Saldo de créditos actuales</label>
                  <input id='saldoCreditos' className='form-group__input' type='text' autoComplete='off' maxLength='13' />
                  <p className='form-group__error'>Introduzca un monto correcto</p>
                </div>
              </div>
              {/* País Inversió */}
              <div className='grid-12 grid-sm-6'>
                <div className='form-group'>
                  <label htmlFor='paisInversion' className='form-group__label'>País Inversió</label>
                  <select name='paisInversion' id='pais' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Guatemala</option>
                  </select>
                  <p className='form-group__error'>Selecciona el pais donde invertiras</p>
                </div>
              </div>
              {/* Departamento Inversión */}
              <div className='grid-12 grid-sm-6'>
                <div className='form-group'>
                  <label htmlFor='departamentoInversion' className='form-group__label'>Departamento Inversión</label>
                  <select name='departamentoInversion' id='departamentoInversion' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Guatemala</option>
                  </select>
                  <p className='form-group__error'>Selecciona el departamento donde invertiras</p>
                </div>
              </div>
              {/* Municipio Inversión */}
              <div className='grid-12 grid-sm-6'>
                <div className='form-group'>
                  <label htmlFor='municipioInversion' className='form-group__label'>Municipio Inversión</label>
                  <select name='municipioInversion' id='municipioInversion' className='form-group__select'>
                    <option value=''> </option>
                    <option value=''>Guatemala</option>
                  </select>
                  <p className='form-group__error'>Selecciona el municipio donde invertiras</p>
                </div>
              </div>
            </div>
          </div>
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

export default Cotizacion;
